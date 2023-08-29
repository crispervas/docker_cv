/**
 * Class UXglobal
 */
"use strict";

const moment = require("moment");
const axios = require("axios");
const boom = require("@hapi/boom");
const envConfigs = require("../../../config/index");

const env = process.env.NODE_ENV;
const config = envConfigs[env];

class UXglobal {
    /**
     * Is the construct of the class
     * @method __construct
     */
    constructor() {
        this.URL = config.global_url;
        this.EMAIL = config.url;
        this.COPY_EMAIL = config.nodemailer_copy;
        this.LIMIT_ROWS = 50;
        this.PAGE_ROWS = 1;

        this.ROL = {
            ADMINISTRATOR: 1,
            CUSTOMER: 2,
        };

        this.GENDER = {
            MALE: 1,
            FEMALE: 2,
            ADMIN: 3
        };

        this.TEMPLATE = {
            WELCOME: 1,
            ACTIVATED: 2,
            EMAIL_FORGOT_PASSWORD: 3,
            EMAIL_NOTIFICATION: 4,
        };

        this.NUMERO_CONSECUTIVO = {
            FACTURAS: 1,
        };

        this.uxCode = {
            VOID: {
                code: -100,
                name: "Cancel",
            },
            DENIED: {
                code: -11,
                name: "Denied",
            },
            RETIRED: {
                code: -9,
                name: "Retired",
            },
            REJECTED: {
                code: -8,
                name: "Rejected",
            },
            ERROR_TOKEN: {
                code: -7,
                name: "Error Token",
            },
            DELETE: {
                code: -6,
                name: "Delete",
            },
            BLOCK: {
                code: -5,
                name: "Blocked",
            },
            PAUSE: {
                code: -4,
                name: "Pase",
            },
            DATA_NULL: {
                code: -3,
                name: "Null",
            },
            PENDING: {
                code: -2,
                name: "Pending",
            },
            DISABLE: {
                code: -1,
                name: "Disable",
            },
            ENABLE: {
                code: 1,
                name: "Enable",
            },
        };
    }

    /**
     * Request date_now
     *
     * @param res
     * @return json
     */
    date_now() {
        var date_result = {
            year: moment().format("YYYY"),
            month: moment().format("MM"),
            day: moment().format("DD"),
            full_date: moment().format("YYYY-MM-DD") + " " + moment().format("hh:mm:ss"),
            date: moment().format("YYYY-MM-DD"),
            full_hour: moment().format("hh:mm:ss"),
            hour: moment().format("hh"),
            minute: moment().format("mm"),
            second: moment().format("ss"),
        };

        return date_result;
    }

    /**
     * Request date_now
     *
     * @param res
     * @return json
     */
    async getCodeState(state, body) {
        console.log("state", state);

        let keys = Object.keys(this.uxCode);

        var stm = true;

        body.state = this.uxCode.ENABLE.code;
        body.stateNombre = this.uxCode.ENABLE.name;

        if (state) {
            await keys.forEach(async (key) => {
                if (stm) {
                    if (this.uxCode[key].code === parseInt(state)) {
                        body.state = this.uxCode[key].code;
                        body.stateName = this.uxCode[key].name;
                        stm = false;
                    }
                }
            });
        }

        return body;
    }

    /**
     * Request groupBy
     *
     * @param res
     * @return json
     */
    groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }
}

module.exports = new UXglobal();
