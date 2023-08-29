"use strict";
var moment = require("moment-timezone");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("cv", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                references: {
                    model: "user",
                    key: "id",
                },
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT,
            },
            resume: {
                type: Sequelize.TEXT,
            },
            photo: {
                type: Sequelize.STRING,
            },
            created: {
                type: Sequelize.JSONB,
            },
            updated: {
                type: Sequelize.JSONB,
            },
            stateName: {
                type: Sequelize.STRING,
            },
            state: {
                type: Sequelize.INTEGER,
            },
            unixtime: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                type: Sequelize.DATE,
                get() {
                    return moment(this.getDataValue("createdAt"))
                        .tz("America/Bogota")
                        .format("YYYY-MM-DD H:mm:ss");
                },
            },
            updatedAt: {
                type: Sequelize.DATE,
                get() {
                    return moment(this.getDataValue("updatedAt"))
                        .tz("America/Bogota")
                        .format("YYYY-MM-DD H:mm:ss");
                },
            },
            deletedAt: {
                type: Sequelize.DATE,
                get() {
                    return moment(this.getDataValue("updatedAt"))
                        .tz("America/Bogota")
                        .format("YYYY-MM-DD H:mm:ss");
                },
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("cv");
    },
};
