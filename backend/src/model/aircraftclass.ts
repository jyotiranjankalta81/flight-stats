import { DataTypes, Model, STRING } from "sequelize";
import { sequelizeDB } from "../db/db-connection";
import { aircraftinterface } from "../interface/aircraft.interface";

export class AircraftClassInstance extends Model<aircraftinterface> {
  [x: string]: any;
}
AircraftClassInstance.init(
  {
    // CONTACTUS_ID: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    // },
    AIRCRAFTCLASS_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    AIRCRAFT_NAME: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // bodys.reg_number,
    AIRCRAFT_CLASS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AIRCRAFT_ICAO: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CLASS_ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeDB,
    tableName: "tbl_aircraft_class",
  }
);
