//JWT Strategy
require("../auth/strategies/refresh");

const passport = require("passport");
const boom = require("@hapi/boom");

const protectRouters = (req, res, next) => {
    passport.authenticate("refresh", (err, usuario) => {
        if (err || usuario == false) {
            next(boom.unauthorized());
        }

        req.login(usuario, { session: false }, (err) => {
            if (err) return next(err);
            next();
        });
    })(req, res, next);
};

module.exports = protectRouters;
