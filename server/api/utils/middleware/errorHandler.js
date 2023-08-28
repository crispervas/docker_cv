const boom = require("@hapi/boom");
const { mongoDB } = require("../../lib/mongoDB/");
const envConfigs = require("../../../config/index");
const axios = require("axios");
const moment = require("moment-timezone");

const env = process.env.NODE_ENV;
const config = envConfigs[env];
const hook = config.HOOK_SLACK;

const sendNotificationSlack = async function (error, user) {
    try {
        let slackbody;

        let errorMessage = `
          
          StatusCode: \`${error.statusCode}\`
          
          There is a new error: \`${error.message}\`
        
          onRoute: ${error.method} _${error.url}_ 
          
            -----------------------------------------------------
            User:  
            \`\`\`${JSON.stringify(user, null, 3)}\`\`\`
            -----------------------------------------------------
            \`\`\`${error.stack}\`\`\`
        `;

        if (error.statusCode > 499) {
            errorMessage = errorMessage.replace(/^/, "<!channel>\n");
        }

        slackbody = {
            mkdwn: true,
            attachments: [
                {
                    mrkdwn_in: ["text"],
                    color: "#f50057",
                    pretext: error.error,
                    author_name: "APP CV",
                    author_link: "avicon.ico",
                    author_icon: "avicon.ico",
                    title: `Error ${error.statusCode} - ${error.message}`,
                    title_link: "",
                    text: errorMessage,
                    // "thumb_url": "http://placekitten.com/g/200/200",
                    footer: "Fecha",
                    footer_icon: "avicon.ico",
                    ts: moment().tz("America/Bogota").unix(),
                },
            ],
        };

        await axios.post(`https://hooks.slack.com/services/${hook}`, slackbody);
    } catch (err) {
        console.log(err);
    }
};

const withErrorStack = (error, stack, validation, url, method) => {
    if (env != "production") {
        return {
            ...error,
            stack,
            validation,
            url,
            method,
        };
    } else {
        try {
            let collection = "logs_error";

            mongoDB.create(collection, {
                ...error,
                stack,
                validation,
                datefull: moment().tz("America/Bogota").format("YYYY-MM-DD H:m:s"),
                dateSmall: moment().tz("America/Bogota").format("YYYY-MM-DD"),
                hour: moment().tz("America/Bogota").format("H:m:s"),
                time: moment().tz("America/Bogota").format(),
            });
            
        } catch (error) {
            console.log("NO CREÓ: ", error);
        }
    }

    return {
        ...error,
        stack,
        validation,
        url,
        method,
    };
};

const logErrors = (err, req, res, next) => {
    console.log(err.errors);
    next(err);
};

const wrapErrors = (err, req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    if (!err.isBoom) {
        next(boom.badImplementation(err));
    }

    next(err);
};

const errorHandler = (err, req, res, next) => {
    let validation = [];

    const {
        output: { statusCode, payload },
        errors,
    } = err;

    if (errors) {
        validation = errors.map((data) => {
            return {
                message: `${data.path} ${data.message}`,
            };
        });
    }

    res.status(statusCode);
    sendNotificationSlack(
        withErrorStack(payload, err.stack, validation, req.originalUrl, req.method),
        req.user ? req.user : {}
    );
    res.json(withErrorStack(payload, err.stack, validation, req.originalUrl, req.method));
};

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler,
    sendNotificationSlack,
};
