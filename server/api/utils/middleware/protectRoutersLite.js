const jwt = require("jsonwebtoken");

const envConfigs = require("../../../config/index");
const env = process.env.NODE_ENV;
const config = envConfigs[env];

const UsuarioSrv = require("../../services/UsuarioSrv");
const boom = require("@hapi/boom");

const protectRoutersLite = async (req, res, next) => {
    var token = req.headers["authorization"];

    if (!token) {
        req.login(null, { session: false }, (err) => {
            if (err) next(err);
            next();
        });
    } else {
        token = token.replace("Bearer ", "");

        await jwt.verify(token, config.jwt, async (err, payload) => {
            if (err) {
                req.login(null, { session: false }, (err) => {
                    if (err) next(err);
                    next();
                });
            } else {
                const usuarioSrv = new UsuarioSrv();
                const userId = payload.sub;
                const profile = payload.rol;
                const permission = payload.scopes;

                try {
                    let query = {
                        where: {
                            id: userId,
                        },
                    };

                    const _usuario = await usuarioSrv.obtener({ query });

                    if (!_usuario) {
                        next(boom.unauthorized("No tiene autorización para este servicio."));
                    } else {
                        const { id, name, email, profile } = _usuario;

                        const payload = {
                            sub: id,
                            name,
                            surname,
                            email,
                            profile,
                        };

                        delete _usuario.clave;

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

module.exports = protectRoutersLite;
