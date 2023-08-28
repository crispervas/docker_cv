const mongoose = require("mongoose");
const env = process.env.NODE_ENV;

const envConfigs = require("../../../config/index");
const config = envConfigs[env];

const USER = config.mogodbUser;
const PASSWORD = config.mogodbPassword;
const DB_NAME = config.mogodbHost;
const DB_HOST = config.mogodbName;

const url = `mongodb://${USER}:${PASSWORD}@${DB_HOST}:27017/${DB_NAME}`;

const connectMongoDB = async () => {
    mongoose.connect(url, () => {
        console.log("Connected to mongoDB 🚀");
    });
};

module.exports = connectMongoDB;
