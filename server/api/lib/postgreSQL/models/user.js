"use strict";
const { Model } = require("sequelize");
var moment = require("moment-timezone");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            user.belongsTo(models.rol, {
                foreignKey: { allowNull: false, name: "rolId" },
                onDelete: "SET NULL",
            });
            user.belongsTo(models.gender, {
                foreignKey: { allowNull: false, name: "genderId" },
                onDelete: "SET NULL",
            });
            user.belongsTo(models.country, {
                foreignKey: { allowNull: false, name: "countryId" },
                onDelete: "SET NULL",
            });
            user.hasMany(models.cv, {
                foreignKey: { allowNull: false, name: "userId" },
            });
        }
    }
    user.init(
        {
            rolId: DataTypes.INTEGER,
            genderId: DataTypes.INTEGER,
            countryId: DataTypes.INTEGER,
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
            surname: {
                type: DataTypes.STRING,
                get() {
                    const surname = this.getDataValue("surname");
                    if (surname) {
                        let capitalizedSurname = surname.toLowerCase();
                        capitalizedSurname = surname
                            .split(" ")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ");
                        return capitalizedSurname;
                    }
                    return surname;
                },
            },
            image: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                set(value) {
                    if (value) {
                        // Convert email to lowercase
                        this.setDataValue("email", value.toLowerCase());
                    } else {
                        this.setDataValue("email", value);
                    }
                },
            },
            password: DataTypes.STRING,
            birthday: DataTypes.DATE,
            address: DataTypes.STRING,
            phone: DataTypes.STRING,
            session: DataTypes.DATE,
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
            paranoid: true,
            modelName: "user",
            hooks: {
                beforeCreate: async (user) => {
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, "a");
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
                beforeUpdate: async (user) => {
                    console.log("user", user);
                    if (user.password) {
                        const salt = await bcrypt.genSaltSync(10, "a");
                        user.password = bcrypt.hashSync(user.password, salt);
                    }
                },
            },
        }
    );
    return user;
};
