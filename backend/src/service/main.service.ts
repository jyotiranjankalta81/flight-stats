import { Request } from "express";
import { FlightDetailsInstance } from "../model/flightdetails";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

class mainServiceClass {
  create_flight_details = async (bodys: any) => {
    const result = await FlightDetailsInstance.create({
      REG_NO: bodys.REG_NO,
      FLAG: bodys?.FLAG,
      LAT: bodys?.LAT,
      LNG: bodys?.LNG,
      ALT: bodys?.ALT,
      DIR: bodys?.DIR,
      SPEED: bodys?.SPEED,
      SQUAWK: bodys?.SQUAWK,
      FLIGHT_NUMBER: bodys?.FLIGHT_NUMBER,
      FLIGHT_ICAO: bodys?.FLIGHT_ICAO,
      FLIGHT_IATA: bodys?.FLIGHT_IATA,
      DEP_ICAO: bodys?.DEP_ICAO,
      DEP_IATA: bodys?.DEP_IATA,
      ARR_ICAO: bodys?.ARR_ICAO,
      ARR_IATA: bodys?.ARR_IATA,
      AIRLINE_ICAO: bodys?.AIRLINE_ICAO,
      AIRLINE_IATA: bodys?.AIRLINE_IATA,
      AIRCRAFT_ICAO: bodys?.AIRCRAFT_ICAO,
      AGE: bodys?.AGE,
      BUILT: bodys?.BUILT,
      ENGINE: bodys?.ENGINE,
      ENGINE_COUNT: bodys?.ENGINE_COUNT,
      MODEL: bodys?.MODEL,
      MANUFACTURER: bodys?.MANUFACTURER,
      MSN: bodys?.MSN,
      TYPE: bodys?.TYPE,
      DEP_TIME: bodys?.DEP_TIME,
      DEP_ESTIMATED: bodys?.DEP_ESTIMATED,
      DEP_ACTUAL: bodys?.DEP_ACTUAL,
      DEP_TIME_UTC: bodys?.DEP_TIME_UTC,
      ARR_TIME: bodys?.ARR_TIME,
      ARR_ESTIMATED: bodys?.ARR_ESTIMATED,
      ARR_ACTUAL: bodys?.ARR_ACTUAL,
      ARR_TIME_UTC: bodys?.ARR_TIME_UTC,
      ARR_ESTIMATED_UTC: bodys?.ARR_ESTIMATED_UTC,
      ARR_ACTUAL_UTC: bodys?.ARR_ACTUAL_UTC,
      DURATION: bodys?.DURATION,
      DEP_NAME: bodys?.DEP_NAME,
      DEP_CITY: bodys?.DEP_CITY,
      DEP_COUNTRY: bodys?.DEP_COUNTRY,
      ARR_NAME: bodys?.ARR_NAME,
      ARR_CITY: bodys?.ARR_CITY,
      AIRLINE_NAME: bodys?.AIRLINE_NAME,
      ARR_COUNTRY: bodys?.ARR_COUNTRY,
      HEX: bodys?.HEX,
    });
    return result;
  };
  getFlightDetails = async (req: Request) => {
    const result = await FlightDetailsInstance.findAll();
    if (result) {
      console.log("result", result?.[0].FLIGHT_ID);
    }
    return result;
  };
}

export const mainService = new mainServiceClass();
