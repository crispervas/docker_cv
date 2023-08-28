const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("@hapi/boom");

const envConfigs = require("../../../../config/index");
const env = process.env.NODE_ENV;
const config = envConfigs[env];

passport.use(
    new Strategy(
        {
            secretOrKey: config.secret_jwt,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async function (tokenPayload, cb) {
            const usersSrv = new UsersSrv();
            const userId = tokenPayload.sub;
            const rol = tokenPayload.rol;
            const permission = tokenPayload.permission;

            try {
               
            } catch (err) {
                return cb(err);
            }
        }
    )
);
