"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOnBoardHomeInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class GetOnBoardHomeInstance extends sequelize_1.Model {
}
exports.GetOnBoardHomeInstance = GetOnBoardHomeInstance;
GetOnBoardHomeInstance.init({
    OBH_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    NAME: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    EMAIL: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    CONTACTUS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ADDRESS: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    MESSAGE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_get_onboard_home',
});
//# sourceMappingURL=getonboardhome.model.js.map