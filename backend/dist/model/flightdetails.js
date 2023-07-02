"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightDetailsInstance = void 0;
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db/db-connection");
class FlightDetailsInstance extends sequelize_1.Model {
}
exports.FlightDetailsInstance = FlightDetailsInstance;
FlightDetailsInstance.init({
    // CONTACTUS_ID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    FLIGHT_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    REG_NO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.reg_number,
    FLAG: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.flag,
    LAT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.lat,
    LNG: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.lng,
    ALT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.alt,
    DIR: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dir,
    SPEED: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.speed,
    SQUAWK: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.squawk,
    FLIGHT_NUMBER: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.flight_number,
    FLIGHT_ICAO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.flight_icao,
    FLIGHT_IATA: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.flight_iata,
    DEP_ICAO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_icao,
    DEP_IATA: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_iata,
    ARR_ICAO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_icao,
    ARR_IATA: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_iata,
    AIRLINE_ICAO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.airline_icao,
    AIRLINE_IATA: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.airline_iata,
    AIRCRAFT_ICAO: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.aircraft_icao,
    AGE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.age,
    BUILT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.built,
    ENGINE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.engine,
    ENGINE_COUNT: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.engine_count,
    MODEL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.model,
    MANUFACTURER: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.manufacturer,
    MSN: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.msn,
    TYPE: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.type,
    DEP_TIME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_time,
    DEP_ESTIMATED: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_estimated,
    DEP_ACTUAL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_actual,
    DEP_TIME_UTC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_time_utc,
    ARR_TIME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_time,
    ARR_ESTIMATED: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_estimated,
    ARR_ACTUAL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_actual,
    ARR_TIME_UTC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_time_utc,
    ARR_ESTIMATED_UTC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_estimated_utc,
    ARR_ACTUAL_UTC: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_actual_utc,
    DURATION: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.duration,
    DEP_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_name,
    DEP_CITY: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_city,
    DEP_COUNTRY: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.dep_country,
    ARR_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_name,
    ARR_CITY: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_city,
    AIRLINE_NAME: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.airline_name,
    ARR_COUNTRY: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    HEX: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    IS_FLEET: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    // bodys.arr_country,
}, {
    sequelize: db_connection_1.sequelizeDB,
    tableName: "tbl_flight",
});
//# sourceMappingURL=flightdetails.js.map