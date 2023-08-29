"use strict";
var moment = require("moment-timezone");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("user", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            rolId: {
                type: Sequelize.INTEGER,
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                references: {
                    model: "rol",
                    key: "id",
                },
            },
            genderId: {
                type: Sequelize.INTEGER,
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                references: {
                    model: "gender",
                    key: "id",
                },
            },
            countryId: {
                type: Sequelize.INTEGER,
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
                references: {
                    model: "country",
                    key: "id",
                },
            },
            name: {
                type: Sequelize.STRING,
            },
            surname: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            birthday: {
                type: Sequelize.DATE,
            },
            address: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            session: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable("user");
    },
};
