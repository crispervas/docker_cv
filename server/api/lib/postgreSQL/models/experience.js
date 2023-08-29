"use strict";
const { Model } = require("sequelize");
var moment = require("moment-timezone");
module.exports = (sequelize, DataTypes) => {
    class experience extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    experience.init(
        {
            cvId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            position: DataTypes.STRING,
            dateInitial: DataTypes.DATE,
            dateFinish: DataTypes.DATE,
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
            modelName: "experience",
        }
    );
    return experience;
};
