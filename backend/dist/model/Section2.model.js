"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section2Instance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class Section2Instance extends sequelize_1.Model {
}
exports.Section2Instance = Section2Instance;
Section2Instance.init({
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
    tableName: 'tbl_section2',
});
//# sourceMappingURL=Section2.model.js.map