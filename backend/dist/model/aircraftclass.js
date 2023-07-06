"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AircraftClassInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class AircraftClassInstance extends sequelize_1.Model {
}
exports.AircraftClassInstance = AircraftClassInstance;
AircraftClassInstance.init({
    // CONTACTUS_ID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    AIRCRAFTCLASS_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    AIRCRAFT_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.reg_number,
    AIRCRAFT_CLASS: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    AIRCRAFT_ICAO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    CLASS_ID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: "tbl_aircraft_class",
});
//# sourceMappingURL=aircraftclass.js.map