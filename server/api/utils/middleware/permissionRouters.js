const boom = require("@hapi/boom");

const permissionRouters = (permission) => {
    return (req, res, next) => {
        console.log("req.user.scopes", req.user.scopes);

        if (!req.user || (req.user && !req.user.scopes)) {
            next(boom.unauthorized("Unauthorized"));
        }

        const hasAccess = permission
            .map((permission) => req.user.scopes.includes(permission))
            .find((permission) => Boolean(permission));

        if (hasAccess) {
            next();
        } else {
            next(boom.unauthorized("Insufficient permissions"));
        }
    };
};

module.exports = permissionRouters;
