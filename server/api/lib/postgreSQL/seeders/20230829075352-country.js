"use strict";
var moment = require("moment-timezone");
const UXglobal = require("../../../utils/global/UXglobal");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            "country",
            [
                {
                    name: "Colombia",
                    description: "Colombia",
                    money: "COP",
                    code: UXglobal.uxCode.ENABLE.code,
                    stateName: UXglobal.uxCode.ENABLE.name,
                    state: UXglobal.uxCode.ENABLE.code,
                    created: JSON.stringify({
                        cliente: moment().tz("America/Bogota"),
                        server: moment().tz("America/Bogota"),
                        date_server: moment().tz("America/Bogota").format("YYYY-MM-DD"),
                        hour_server: moment().tz("America/Bogota").format("H:m:s"),
                        unixtime: moment().tz("America/Bogota").unix(),
                        user: UXglobal.uxCode.DATA_NULL.code,
                        rol: UXglobal.uxCode.DATA_NULL.code,
                        permissions: [],
                    }),
                    unixtime: moment().tz("America/Bogota").unix(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Australia",
                    description: "Australia",
                    money: "AUD",
                    code: UXglobal.uxCode.ENABLE.code,
                    stateName: UXglobal.uxCode.ENABLE.name,
                    state: UXglobal.uxCode.ENABLE.code,
                    created: JSON.stringify({
                        cliente: moment().tz("America/Bogota"),
                        server: moment().tz("America/Bogota"),
                        date_server: moment().tz("America/Bogota").format("YYYY-MM-DD"),
                        hour_server: moment().tz("America/Bogota").format("H:m:s"),
                        unixtime: moment().tz("America/Bogota").unix(),
                        user: UXglobal.uxCode.DATA_NULL.code,
                        rol: UXglobal.uxCode.DATA_NULL.code,
                        permissions: [],
                    }),
                    unixtime: moment().tz("America/Bogota").unix(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return await queryInterface.bulkDelete("country", null, {});
    },
};
