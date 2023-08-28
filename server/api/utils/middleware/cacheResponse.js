const envConfigs = require("../../../config/index");

const env = process.env.NODE_ENV;
const config = envConfigs[env];

const cacheResponse = (res, seconds) => {
    if (config.dev == "production") {
        // res.set('Cache-Control', `public, max-age=${seconds}`);
    }
};

module.exports = cacheResponse;
