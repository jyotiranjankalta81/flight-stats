"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section1Instance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class Section1Instance extends sequelize_1.Model {
}
exports.Section1Instance = Section1Instance;
Section1Instance.init({
    SE_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    IMAGE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    TITLE: {
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
    tableName: 'tbl_section1',
});
//# sourceMappingURL=section1.model.js.map