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

const models = [
    {
        resource: dbPostgresql.user,
        options: {
            listProperties: [
                "id",
                "countryId",
                "rolId",
                "genderId",
                "name",
                "surname",
                "stateName",
                "createdAt",
                "updatedAt",
            ],
            parent: sidebarGroups.user,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.country,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.user,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.gender,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.user,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.rol,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.user,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.cv,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.admin,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.experience,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.admin,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.education,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.admin,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.skill,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.admin,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
    {
        resource: dbPostgresql.reference,
        options: {
            listProperties: ["id", "name", "stateName", "createdAt", "updatedAt"],
            parent: sidebarGroups.admin,
            properties: {
                name: {
                    isTitle: true,
                },
                id: {
                    isTitle: false,
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: false,
                        show: false,
                    },
                },
                createdAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                updatedAt: {
                    isVisible: {
                        list: true,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
                deletedAt: {
                    isVisible: {
                        list: false,
                        edit: false,
                        filter: true,
                        show: false,
                    },
                },
            },
        },
    },
];

module.exports = {
    models,
    dbPostgresql,
};
