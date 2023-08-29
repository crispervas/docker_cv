const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const { Op } = require("sequelize");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const UXglobal = require("../global/UXglobal");

passport.use(
    new BasicStrategy(async function (username, clave, cb) {
        try {
        } catch (err) {
            return cb(err);
        }
    })
);
