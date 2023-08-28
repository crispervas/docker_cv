/**
 * Class UXLogs
 */
"use strict";
const morgan = require("morgan");
const bunyan = require("bunyan");
const moment = require("moment-timezone");
// const { mongoDB } = require("../../lib/mongoDB/");
const env = process.env.NODE_ENV;

const loggerInstance = bunyan.createLogger({
    name: "transaction-notifier",
    serializers: {
        req: require("bunyan-express-serializer"),
        res: bunyan.stdSerializers.res,
        err: bunyan.stdSerializers.err,
    },
    level: "info",
    streams: [
        {
            path: "./logs/logs.log",
            period: "1d", // daily rotation
            count: 5, // keep 5 back copies
        },
        {
            stream: process.stdout,
        },
        {
            type: "raw",
            stream: new Logs(),
            closeOnExit: true,
        },
    ],
});

function Logs() {
    // initialize whatever is needed here
}

Logs.prototype.write = function write(record) {
    if (env == "production") {
        try {
            // let collection = "logs_record";
            // mongoDB.create(collection, record);
        } catch (error) {
            console.log("NO CREÓ: ", error);
        }
    }
};

class UXLogs {
    /**
     * Is the construct of the class
     * @method __construct
     */
    constructor(app) {
        this.app = app;

        morgan.token("id", function getId(req) {
            return req.id;
        });

        morgan.token("date", function getId(req) {
            return req.time;
        });

        this.loggerFormat = `:id [:date] ":method :url" :status :response-time`;
        this.statusCodeLess();
        this.statusCodeHigher();
        this.logger_Instance();
        this.logger_Response();
    }

    /**
     * Request statusCodeHigher
     *
     * @param res
     * @return json
     */
    statusCodeHigher() {
        this.app.use(
            morgan(this.loggerFormat, {
                skip: function (req, res) {
                    return res.statusCode >= 400;
                },
                stream: process.stdout,
            })
        );
    }

    /**
     * Request statusCodeLess
     *
     * @param res
     * @return json
     */
    statusCodeLess() {
        this.app.use(
            morgan(this.loggerFormat, {
                skip: function (req, res) {
                    return res.statusCode < 400;
                },
                stream: process.stderr,
            })
        );
    }

    /**
     * Request logger_Instance
     *
     * @param res
     * @return json
     */
    logger_Instance() {
        this.app.use((req, res, next) => {
            if (req.method != "GET") {
            }
            next();
        });
    }

    /**
     * Request logger_Response
     *
     * @param res
     * @return json
     */
    logger_Response() {
        this.app.use((req, res, next) => {
            if (req.method != "GET") {
                function afterResponse() {
                    res.removeListener("finish", afterResponse);
                    res.removeListener("close", afterResponse);
                    console.log("USER------------: ", req.user);
                    if (req.user) {
                        var log = loggerInstance.child(
                            {
                                id: req.id,
                                method: req.method,
                                user: req.user ? req.user : {},
                                userId: req.user ? req.user.sub : -1,
                                userName: req.user ? req.user.nombre + " " + req.user.apellido : "-1",
                                userProfile: req.user ? req.user.perfil : "-1",
                                userScope: req.user && req.user.scopes ? req.user.scopes : [],
                                url: req.url,
                                datefull: moment().tz("America/Bogota").format("YYYY-MM-DD H:m:s"),
                                dateSmall: moment().tz("America/Bogota").format("YYYY-MM-DD"),
                                hour: moment().tz("America/Bogota").format("H:m:s"),
                                time: moment().tz("America/Bogota").format(),
                                body: req.body ? JSON.stringify(req.body) : {},
                            },
                            true
                        );
                        log.info({ req: req, res: res }, "response");
                    }
                }
                res.on("finish", afterResponse);
                res.on("close", afterResponse);
            }
            next();
        });
    }

    /**
     * Request logger_Response
     *
     * @param res
     * @return json
     */
    logResponse(id, body, statusCode) {
        var log = loggerInstance.child(
            {
                id: id,
                body: body,
                statusCode: statusCode,
            },
            true
        );
        log.info("response");
    }
}

module.exports = UXLogs;
