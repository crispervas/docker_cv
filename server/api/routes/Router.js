//Import Routes
const RolCtrl = require("./RolCtrl");
// const GenderCtrl = require("./GenderCtrl");
// const CountryCtrl = require("./CountryCtrl");
// const UserCtrl = require("./UserCtrl");

function onRouter(app, url) {
    RolCtrl(app, url);
    // GenderCtrl(app, url);
    // CountryCtrl(app, url);
    // UserCtrl(app, url);
}

module.exports = onRouter;
