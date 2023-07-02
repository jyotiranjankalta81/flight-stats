"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerReviewsInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class CustomerReviewsInstance extends sequelize_1.Model {
}
exports.CustomerReviewsInstance = CustomerReviewsInstance;
CustomerReviewsInstance.init({
    RE_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    IMAGE: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    CONTENT: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    NAME: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    DESIGNATION: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    ADDED_BY: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: 'tbl_reviews',
});
//# sourceMappingURL=reviews.model.js.map