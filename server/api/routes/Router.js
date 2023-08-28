//Import Routes
const ExampleCtrl = require("./ExampleCtrl");


function onRouter(app, url) {
    ExampleCtrl(app, url);
}

module.exports = onRouter;
