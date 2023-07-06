import { DataTypes, Model } from "sequelize";
import { sequelizeDB } from "../db/db-connection";
import { flightdetailsinterface } from "../interface/flightdetails.interface";
import { AircraftClassInstance } from "./aircraftclass";

export class FlightDetailsInstance extends Model<flightdetailsinterface> {
  [x: string]: any;
}
FlightDetailsInstance.init(
  {
    // CONTACTUS_ID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    FLIGHT_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    REG_NO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.reg_number,
    FLAG: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.flag,
    LAT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.lat,
    LNG: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.lng,
    ALT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.alt,
    DIR: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dir,
    SPEED: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.speed,
    SQUAWK: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.squawk,
    FLIGHT_NUMBER: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.flight_number,
    FLIGHT_ICAO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.flight_icao,
    FLIGHT_IATA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.flight_iata,
    DEP_ICAO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_icao,
    DEP_IATA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_iata,
    ARR_ICAO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_icao,
    ARR_IATA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_iata,
    AIRLINE_ICAO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.airline_icao,
    AIRLINE_IATA: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.airline_iata,
    AIRCRAFT_ICAO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.aircraft_icao,
    AGE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.age,
    BUILT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.built,
    ENGINE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.engine,
    ENGINE_COUNT: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.engine_count,
    MODEL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.model,
    MANUFACTURER: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.manufacturer,
    MSN: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.msn,
    TYPE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.type,
    DEP_TIME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_time,
    DEP_ESTIMATED: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_estimated,
    DEP_ACTUAL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_actual,
    DEP_TIME_UTC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_time_utc,
    ARR_TIME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_time,
    ARR_ESTIMATED: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_estimated,
    ARR_ACTUAL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_actual,
    ARR_TIME_UTC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_time_utc,
    ARR_ESTIMATED_UTC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_estimated_utc,
    ARR_ACTUAL_UTC: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_actual_utc,
    DURATION: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.duration,
    DEP_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_name,
    DEP_CITY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_city,
    DEP_COUNTRY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.dep_country,
    ARR_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_name,
    ARR_CITY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_city,
    AIRLINE_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.airline_name,
    ARR_COUNTRY: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HEX: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IS_FLEET: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AIRCRAFTS_CLASS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CLASS_ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.arr_country,
  },
  {
    sequelize: sequelizeDB,
    tableName: "tbl_flight",
  }
);

// AircraftClassInstance.belongsTo(FlightDetailsInstance, {
//   foreignKey: {
//     name: "CLASS_ID",
//     allowNull: true,
//   },
// });
// FlightDetailsInstance.hasOne(AircraftClassInstance, {
//   foreignKey: {
//     name: "CLASS_ID",
//     allowNull: true,
//   },
// });
