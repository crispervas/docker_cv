const express = require("express");
const chalk = require("chalk");
const helmet = require("helmet");
const i18n = require("i18n");
const json2xls = require("json2xls");
const cors = require("cors");
const AdminJSExpress = require("@adminjs/express");

const start = async () => {
    const app = express();

    //Import Config
    const envConfigs = require("./config/index");
    const env = process.env.NODE_ENV;
    const config = envConfigs[env];

    //cors
    var whitelist = [
        undefined,
        "http://localhost:4200",
        "http://localhost:4300",
        "http://localhost:3000",
        "http://expesapp.com",
    ];
    var corsOptions = {
        origin: function (origin, callback) {
            console.log("origin: ", origin);
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    };

    app.use(cors(corsOptions));

    //Import Logs
    const logs = require("./api/utils/global/UXlogs");

    //Import middleware
    const { logErrors, wrapErrors, errorHandler } = require("./api/utils/middleware/errorHandler");
    const { notFoundHandler } = require("./api/utils/middleware/notFoundHandler");
    const { timeHandler } = require("./api/utils/middleware/timeHandler");

    //Import router
    const onRouter = require("./api/routes/Router");

    //Language
    i18n.configure({
        locales: ["es", "en"],
        register: global,
        defaultLocale: "es",
        directory: __dirname + "/locales",
    });

    //Super administrador
    // if (env == "production" || env == "development" ) {
    const { adminJs, authenticate } = require("./api/admin");
    adminJs.watch();
    const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
        adminJs,
        {
            authenticate,
            cookiePassword: config.secret,
        },
        null,
        {
            resave: true,
            saveUninitialized: true,
            secret: config.secret,
        }
    );

    app.use(adminJs.options.rootPath, adminRouter);
    // }

    // Security
    app.disable("x-powered-by");
    app.use(helmet());
    app.use(
        helmet.contentSecurityPolicy({
            useDefaults: true,
            directives: {
                "img-src": ["'self'", "https: data:"],
            },
        })
    );

    // Parse application/x-www-form-urlencoded
    app.use(express.urlencoded({ limit: "50mb", extended: true }));
    // Parse application/json
    app.use(express.json({ limit: "50mb", extended: true }));

    // default: using 'accept-language' header to guess language settings
    app.use(i18n.init);

    // That appends request id to req object.
    // app.use(addRequestId);

    // Time middleware
    app.use(timeHandler);

    // JSON to Excel
    app.use(json2xls.middleware);

    //Documentation
    const swaggerUI = require("swagger-ui-express");
    const swaggerDocument = require("./swagger_output.json");

    const options = {
        customCss: ".swagger-ui .topbar { display: none }",
        customSiteTitle: "Api CV",
        customfavIcon: "",
    };

    // API Routes
    app.use(`${config.url}/static`, express.static(__dirname + "/public"));
    app.use(`${config.url}/api-docs`, swaggerUI.serve, swaggerUI.setup(swaggerDocument, options));

    /** MORGAN LOGS */
    // const logs_app = new logs(app);
    /** MORGAN LOGS */

    //Routes
    console.log(chalk.green(`*********** ROUTES ***********`));
    onRouter(app, config.url);
    console.log(chalk.green(`*********** END ROUTES ***********`));

    //Catch 404
    app.use(notFoundHandler);

    // Errors middleware
    app.use(logErrors);
    app.use(wrapErrors);
    app.use(errorHandler);

    //Server
    app.listen(config.port, () => {
        console.log(chalk.blue(`Listening http://localhost:${config.port} ⚙️`)); //eslint-disable-lin=>e
        console.log(chalk.blue(`AdminBro is under http://localhost:${config.port}/api/admin  🧰`)); //eslint-disable-lin=>e
    });
};

start();
