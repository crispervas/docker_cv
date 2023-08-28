const jwt = require("jsonwebtoken");

const envConfigs = require("../../../config/index");
const env = process.env.NODE_ENV;
const config = envConfigs[env];

const UserSrv = require("../../services/UserSrv");
const boom = require("@hapi/boom");

const protectRouters = async (req, res, next) => {
    var token = req.headers["authorization"];

    if (!token) {
        next(boom.unauthorized("You are not authorized for this service."));
    } else {
        token = token.replace("Bearer ", "");

        await jwt.verify(token, config.jwt, async (err, payload) => {
            if (err) {
                let { name } = err;
                name == "TokenExpiredError" ? next(boom.unauthorized(err)) : next(boom.unauthorized(err));
            } else {
                const userSrv = new UserSrv();
                const userId = payload.sub;
                const profile = payload.rol;
                const permission = payload.scopes;

                try {
                    let query = {
                        where: {
                            id: userId,
                        },
                    };

                    const _user = await userSrv.obtener({ query });

                    if (!_user) {
                        next(boom.unauthorized("You are not authorized for this service."));
                    } else {
                        const { id, name, email, surname } = _user;

                        const payload = {
                            sub: id,
                            name,
                            surname,
                            email,
                            profile,
                        };

                        delete _user.clave;

                        const user = { ...payload, scopes: permission };

                        req.login(user, { session: false }, (err) => {
                            if (err) next(err);
                            next();
                        });
                    }
                } catch (err) {
                    next(err);
                }
            }
        });
    }
};

module.exports = protectRouters;
