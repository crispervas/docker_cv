"use strict";
const { Model } = require("sequelize");
var moment = require("moment-timezone");
module.exports = (sequelize, DataTypes) => {
    class country extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            console.log(models);
            country.hasMany(models.user, {
                foreignKey: { allowNull: false, name: "countryId" },
            });
        }
    }
    country.init(
        {
            name: {
                type: DataTypes.STRING,
                get() {
                    const name = this.getDataValue("name");
                    if (name) {
                        let capitalizedName = name.toLowerCase();
                        capitalizedName = name
                            .split(" ")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ");
                        return capitalizedName;
                    }
                    return name;
                },
            },
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
            code: DataTypes.INTEGER,
            money: DataTypes.STRING,
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
            modelName: "country",
        }
    );
    return country;
};
