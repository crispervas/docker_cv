"use strict";
var moment = require("moment-timezone");
const UXglobal = require("../../../utils/global/UXglobal");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            "gender",
            [
                {
                    name: "Male",
                    description: "Male",
                    code: UXglobal.GENDER.MALE,
                    group: 1,
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
                    name: "Female",
                    description: "Female",
                    code: UXglobal.GENDER.FEMALE,
                    group: 1,
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
                  name: "Admin",
                  description: "Admin",
                  code: UXglobal.GENDER.ADMIN,
                  group: 2,
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
        return await queryInterface.bulkDelete("gender", null, {});
    },
};
