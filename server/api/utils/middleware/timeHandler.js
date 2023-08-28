var moment = require("moment-timezone");
var locale = require("locale");
var i18n = require("i18n");

function timeHandler(req, res, next) {
    let language = req.headers["accept-language"];
    language = new locale.Locale(language ? language : "es");
    i18n.setLocale(language);
    moment.locale(language.language);
    req.time = moment().tz("America/Bogota").format("YYYY-MM-DD H:mm:ss");
    next();
}

module.exports = {
    timeHandler,
};
