"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section3Instance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class Section3Instance extends sequelize_1.Model {
}
exports.Section3Instance = Section3Instance;
Section3Instance.init({
    SE_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    HEADING: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    CONTENT: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    NAME: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ADDED_BY: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_section3',
});
//# sourceMappingURL=section3.model.js.map