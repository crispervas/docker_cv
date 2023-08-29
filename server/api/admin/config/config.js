//https://carbondesignsystem.com/guidelines/icons/library/
const dbPostgresql = require("../../lib/postgreSQL/models");

const sidebarGroups = {
    admin: {
        name: "Management resumes",
        icon: "InventoryManagement",
    },
    user: {
        name: "Management user",
        icon: "User",
    },
    logs: {
        name: "Logs",
        icon: "FlowLogsVpc",
    },
};

const models = [];

module.exports = {
    models,
    dbPostgresql,
};
