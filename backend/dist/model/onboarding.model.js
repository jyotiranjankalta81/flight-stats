"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnBoardingInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class OnBoardingInstance extends sequelize_1.Model {
}
exports.OnBoardingInstance = OnBoardingInstance;
OnBoardingInstance.init({
    OB_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    FIRSTNAME: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    LASTNAME: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ABOUT: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    BODY_FILE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_onboarding',
});
//# sourceMappingURL=onboarding.model.js.map