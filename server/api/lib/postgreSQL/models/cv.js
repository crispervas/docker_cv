"use strict";
const { Model } = require("sequelize");
var moment = require("moment-timezone");
module.exports = (sequelize, DataTypes) => {
    class cv extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    cv.init(
        {
            userId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            resume: DataTypes.TEXT,
            photo: DataTypes.STRING,
            created: DataTypes.JSONB,
            updated: DataTypes.JSONB,
            stateName: DataTypes.STRING,
            state: DataTypes.INTEGER,
            unixtime: DataTypes.INTEGER,
            createdAt: {
                type: DataTypes.DATE,
                get() {
                    return moment(this.getDataValue("createdAt"))
                        .tz("America/Bogota")
                        .format("YYYY-MM-DD H:mm:ss");
                },
            },
            updatedAt: {
                type: DataTypes.DATE,
                get() {
                    return moment(this.getDataValue("updatedAt"))
                        .tz("America/Bogota")
                        .format("YYYY-MM-DD H:mm:ss");
                },
            },
        },
        {
            sequelize,
            modelName: "cv",
        }
    );
    return cv;
};
