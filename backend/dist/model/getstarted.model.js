"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStartedInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class GetStartedInstance extends sequelize_1.Model {
}
exports.GetStartedInstance = GetStartedInstance;
GetStartedInstance.init({
    GS_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    FIRSTNAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    LASTNAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    PHONE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_getstarted',
});
//# sourceMappingURL=getstarted.model.js.map