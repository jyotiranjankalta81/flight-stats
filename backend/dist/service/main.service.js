"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainService = void 0;
const flightdetails_1 = require("../model/flightdetails");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const aircraftclass_1 = require("../model/aircraftclass");
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env") });
class mainServiceClass {
    constructor() {
        this.create_flight_details = (bodys) => __awaiter(this, void 0, void 0, function* () {
            console.log("model", bodys === null || bodys === void 0 ? void 0 : bodys.AIRCRAFT_ICAO);
            const classchecker = yield aircraftclass_1.AircraftClassInstance.findOne({
                where: {
                    AIRCRAFT_ICAO: bodys === null || bodys === void 0 ? void 0 : bodys.AIRCRAFT_ICAO,
                },
            });
            console.log("result", classchecker === null || classchecker === void 0 ? void 0 : classchecker.AIRCRAFT_CLASS);
            console.log("result", classchecker === null || classchecker === void 0 ? void 0 : classchecker.AIRCRAFT_CLASS);
            console.log("result", classchecker === null || classchecker === void 0 ? void 0 : classchecker.AIRCRAFT_CLASS);
            console.log("result", classchecker === null || classchecker === void 0 ? void 0 : classchecker.AIRCRAFT_CLASS);
            console.log("result", classchecker === null || classchecker === void 0 ? void 0 : classchecker.AIRCRAFT_CLASS);
            if (classchecker) {
                var air_class = classchecker === null || classchecker === void 0 ? void 0 : classchecker.AIRCRAFT_CLASS;
                console.log("aircraftclass", air_class);
                console.log("aircraftclass", air_class);
                console.log("aircraftclass", air_class);
                console.log("aircraftclass", air_class);
                console.log("aircraftclass", air_class);
                console.log("aircraftclass", air_class);
                // return false;
                const result = yield flightdetails_1.FlightDetailsInstance.create({
                    REG_NO: bodys === null || bodys === void 0 ? void 0 : bodys.REG_NO,
                    FLAG: bodys === null || bodys === void 0 ? void 0 : bodys.FLAG,
                    LAT: bodys === null || bodys === void 0 ? void 0 : bodys.LAT,
                    LNG: bodys === null || bodys === void 0 ? void 0 : bodys.LNG,
                    ALT: bodys === null || bodys === void 0 ? void 0 : bodys.ALT,
                    DIR: bodys === null || bodys === void 0 ? void 0 : bodys.DIR,
                    SPEED: bodys === null || bodys === void 0 ? void 0 : bodys.SPEED,
                    SQUAWK: bodys === null || bodys === void 0 ? void 0 : bodys.SQUAWK,
                    FLIGHT_NUMBER: bodys === null || bodys === void 0 ? void 0 : bodys.FLIGHT_NUMBER,
                    FLIGHT_ICAO: bodys === null || bodys === void 0 ? void 0 : bodys.FLIGHT_ICAO,
                    FLIGHT_IATA: bodys === null || bodys === void 0 ? void 0 : bodys.FLIGHT_IATA,
                    DEP_ICAO: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_ICAO,
                    DEP_IATA: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_IATA,
                    ARR_ICAO: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_ICAO,
                    ARR_IATA: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_IATA,
                    AIRLINE_ICAO: bodys === null || bodys === void 0 ? void 0 : bodys.AIRLINE_ICAO,
                    AIRLINE_IATA: bodys === null || bodys === void 0 ? void 0 : bodys.AIRLINE_IATA,
                    AIRCRAFT_ICAO: bodys === null || bodys === void 0 ? void 0 : bodys.AIRCRAFT_ICAO,
                    AGE: bodys === null || bodys === void 0 ? void 0 : bodys.AGE,
                    BUILT: bodys === null || bodys === void 0 ? void 0 : bodys.BUILT,
                    ENGINE: bodys === null || bodys === void 0 ? void 0 : bodys.ENGINE,
                    ENGINE_COUNT: bodys === null || bodys === void 0 ? void 0 : bodys.ENGINE_COUNT,
                    MODEL: bodys === null || bodys === void 0 ? void 0 : bodys.MODEL,
                    MANUFACTURER: bodys === null || bodys === void 0 ? void 0 : bodys.MANUFACTURER,
                    MSN: bodys === null || bodys === void 0 ? void 0 : bodys.MSN,
                    TYPE: bodys === null || bodys === void 0 ? void 0 : bodys.TYPE,
                    DEP_TIME: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_TIME,
                    DEP_ESTIMATED: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_ESTIMATED,
                    DEP_ACTUAL: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_ACTUAL,
                    DEP_TIME_UTC: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_TIME_UTC,
                    ARR_TIME: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_TIME,
                    ARR_ESTIMATED: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_ESTIMATED,
                    ARR_ACTUAL: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_ACTUAL,
                    ARR_TIME_UTC: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_TIME_UTC,
                    ARR_ESTIMATED_UTC: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_ESTIMATED_UTC,
                    ARR_ACTUAL_UTC: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_ACTUAL_UTC,
                    DURATION: bodys === null || bodys === void 0 ? void 0 : bodys.DURATION,
                    DEP_NAME: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_NAME,
                    DEP_CITY: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_CITY,
                    DEP_COUNTRY: bodys === null || bodys === void 0 ? void 0 : bodys.DEP_COUNTRY,
                    ARR_NAME: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_NAME,
                    ARR_CITY: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_CITY,
                    AIRLINE_NAME: bodys === null || bodys === void 0 ? void 0 : bodys.AIRLINE_NAME,
                    ARR_COUNTRY: bodys === null || bodys === void 0 ? void 0 : bodys.ARR_COUNTRY,
                    HEX: bodys === null || bodys === void 0 ? void 0 : bodys.HEX,
                    AIRCRAFTS_CLASS: air_class,
                });
                return result;
            }
            // return false;
        });
        this.getFlightDetails = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield flightdetails_1.FlightDetailsInstance.findAll();
            if (result) {
                console.log("result", result === null || result === void 0 ? void 0 : result[0].FLIGHT_ID);
            }
            return result;
        });
        this.postAircraftClass = (bodys) => __awaiter(this, void 0, void 0, function* () {
            const result = yield aircraftclass_1.AircraftClassInstance.create({
                AIRCRAFT_CLASS: bodys === null || bodys === void 0 ? void 0 : bodys.AIRCRAFT_CLASS,
                AIRCRAFT_NAME: bodys === null || bodys === void 0 ? void 0 : bodys.AIRCRAFT_NAME,
            });
            return result;
        });
        this.getAirCraftClass = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield flightdetails_1.FlightDetailsInstance.findAll();
            return result;
        });
    }
}
exports.mainService = new mainServiceClass();
//# sourceMappingURL=main.service.js.map