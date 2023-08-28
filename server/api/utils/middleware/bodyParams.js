const UXglobal = require("../global/UXglobal");
var moment = require("moment-timezone");

const createTime = (req, res, next) => {
    req.body.created = {
        client: req.body.time ? req.body.time : req.time,
        server: req.time,
        date_server: moment().tz("America/Bogota").format("YYYY-MM-DD"),
        hour_server: moment().tz("America/Bogota").format("HH:mm:ss"),
        unixtime: moment().tz("America/Bogota"),
        user: req.user ? req.user.sub : UXglobal.uxCode.DATA_NULL.code,
        rol: req.user ? req.user.perfil : UXglobal.uxCode.DATA_NULL.code,
        permissions: req.user ? req.user.scopes : [],
    };
    req.body.unixtime = moment().tz("America/Bogota").unix();
    next();
};

const updateTime = (req, res, next) => {
    req.body.updated = {
        client: req.body.time ? req.body.time : req.time,
        server: req.time,
        date_server: moment().tz("America/Bogota").format("YYYY-MM-DD"),
        hour_server: moment().tz("America/Bogota").format("HH:mm:ss"),
        unixtime: moment().tz("America/Bogota"),
        user: req.user ? req.user.sub : UXglobal.uxCode.DATA_NULL.code,
        rol: req.user ? req.user.perfil : UXglobal.uxCode.DATA_NULL.code,
        permissions: req.user ? req.user.scopes : [],
    };
    req.body.unixtime = moment().tz("America/Bogota").unix();
    next();
};

module.exports = {
    updateTime,
    createTime,
};
