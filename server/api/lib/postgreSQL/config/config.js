require("dotenv").config();

const env = process.env.NODE_ENV;

const envConfigs = require("../../../../config/index");
const config = envConfigs[env];

const USER = config.dbUser;
const PASSWORD = config.dbPassword;
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;

console.log("configINIT", config);

module.exports = {
    database: DB_NAME,
    username: USER,
    password: PASSWORD,
    host: DB_HOST,
    dialectOptions: {
        useUTC: false, // for reading from database
        connectTimeout: 6000000,
        typeCast: function (field, next) {
            // for reading from database
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        },
    },
    timezone: "-05:00",
    define: {
        timestamps: true,
        underscored: false,
        freezeTableName: true,
    },
    pool: {
        max: 20,
        min: 0,
        acquire: 300000,
        idle: 100000,
    },
    dialect: "postgres",
    logging: console.log,
    // logging: env === "production" ? false : true,
    logging: true,
    setup: false,
};
