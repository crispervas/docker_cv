"use strict";
var moment = require("moment-timezone");
const UXglobal = require("../../../utils/global/UXglobal");
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert(
            "user",
            [
                {
                    rolId: 1,
                    countryId: 1,
                    genderId: 3,
                    name: "Administrator",
                    surname: "Expresapp",
                    email: "admin@expresapp.com",
                    password: bcrypt.hashSync("CV_123", bcrypt.genSaltSync(10, "a")),
                    birthday: moment().tz("America/Bogota").format("YYYY-MM-DD"),
                    address: "Colombia",
                    phone: '1234567890',
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
                  rolId: 2,
                  countryId: 2,
                  genderId: 1,
                  name: "Cristhian",
                  surname: "Pereira",
                  email: "crispervas93@gmail.com",
                  password: bcrypt.hashSync("CP_123", bcrypt.genSaltSync(10, "a")),
                  birthday: moment('1993-02-17').tz("America/Bogota").format("YYYY-MM-DD"),
                  address: "Australia",
                  phone: '1234567890',
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
        return await queryInterface.bulkDelete("user", null, {});
    },
};
