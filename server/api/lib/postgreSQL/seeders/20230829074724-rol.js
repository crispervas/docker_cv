"use strict";
var moment = require("moment-timezone");
const UXglobal = require("../../../utils/global/UXglobal");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            "rol",
            [
                {
                    name: "Administrator",
                    access: "Administrator",
                    description: "Administrator",
                    code: UXglobal.ROL.ADMINISTRATOR,
                    group: 1,
                    image: "",
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
                    name: "Customer",
                    access: "Customer",
                    description: "Customer",
                    code: UXglobal.ROL.CUSTOMER,
                    group: 2,
                    image: "",
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
        return await queryInterface.bulkDelete("rol", null, {});
    },
};
