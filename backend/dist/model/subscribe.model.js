"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class SubscribeInstance extends sequelize_1.Model {
}
exports.SubscribeInstance = SubscribeInstance;
SubscribeInstance.init({
    SB_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    EMAIL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_subscribe',
});
//# sourceMappingURL=subscribe.model.js.map