const AdminJS = require("adminjs");
const AdminJSSequelize = require("@adminjs/sequelize");
const envConfigs = require("../../config/index");
const { models, dbPostgresql } = require("./config/config");

const env = process.env.NODE_ENV;
const config = envConfigs[env];

AdminJS.registerAdapter(AdminJSSequelize);

const translate = require("./locale/es");
const bcrypt = require("bcrypt");

const locale = {
    ...translate,
};

const DEFAULT_ADMIN = {
    email: "admin@example.com",
    password: "password",
};

const authenticate = async () => {
    return { email: DEFAULT_ADMIN.email };
};

const adminJs = new AdminJS({
    databases: [dbPostgresql],
    rootPath: "/api/admin",
    loginPath: "/api/admin/login",
    logoutPath: "/api/admin/login",
    resources: [...models],
    locale,
    version: "1.0.0",
    branding: {
        companyName: "Cristhian Pereira",
        logo: "",
        favicon: "",
        softwareBrothers: false,
    },
    dashboard: {
        handler: async () => {
            return { some: "output" };
        },
        component: AdminJS.bundle("./web/dashboard-component"),
    },
});

module.exports = {
    adminJs,
    authenticate,
};
