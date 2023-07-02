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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = require("./config/config");
const morgan_1 = require("./config/morgan");
const rateLimiter_1 = require("./middlewares/rateLimiter");
const error_1 = require("./middlewares/error");
const ApiError_1 = require("./utils/ApiError");
const v1_1 = __importDefault(require("./routes/v1"));
const passport_1 = __importDefault(require("passport"));
const axios = require("axios");
const passport_2 = require("./config/passport");
const main_service_1 = require("./service/main.service");
const flightdetails_1 = require("./model/flightdetails");
const expressFileUpload = require("express-fileupload");
const webLink = "https://airlabs.co/api/v9/flights?"; // Replace with the actual URL of the third-party website
const webLinks = "https://airlabs.co/api/v9/fleets?";
// dead=====>
// const apiKey = "e2a9b86e-e1cc-4746-8a2d-cdd1630bdf6e";
// const apiKey = "6bbc1be5-88d0-4f84-96d9-0faf03e41c09";
const apiKey = "e5141de9-d4bb-4204-b3a4-8a16d888d51c";
// working====>
// const apiKey = "01db09ab-2c79-4d15-9687-92c916226422";
// const apiKey = "2730ebfa-6113-4bd2-83b0-97cb0240cf52";
exports.app = (0, express_1.default)();
if (config_1.config.env !== "test") {
    exports.app.use(morgan_1.morgans.successHandler);
    exports.app.use(morgan_1.morgans.errorHandler);
}
exports.app.use(expressFileUpload());
// set security HTTP headers
exports.app.use((0, helmet_1.default)());
// parse json request body
exports.app.use(express_1.default.json());
// parse urlencoded request body
exports.app.use(express_1.default.urlencoded({ extended: true }));
// sanitize request data
// app.use(xss());
// gzip compression
exports.app.use((0, compression_1.default)());
// enable cors
exports.app.use((0, cors_1.default)());
exports.app.options("*", (0, cors_1.default)());
//pasport
exports.app.use(passport_1.default.initialize());
passport_1.default.use("jwt", passport_2.jwtStrategy);
// limit repeated failed requests to auth endpoints
if (config_1.config.env === "production") {
    exports.app.use("/api/auth", rateLimiter_1.authLimiter);
}
// v1 api routes
exports.app.use("/api", v1_1.default);
exports.app.get("/demo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("server working properly");
}));
function fetchData() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make the GET request to the third-party website
            return false;
            const response = yield axios.get(webLink, {
                params: {
                    api_key: apiKey,
                    aircraft_icao: [
                        "PRM1",
                        // aircraft_icao:
                        // "PRM1",
                        // aircraft_icao:
                        "CL30",
                        // aircraft_icao:
                        "CL35",
                        // aircraft_icao:
                        "CL60",
                        // aircraft_icao:
                        // "CL60",
                        // // aircraft_icao:
                        // "CL60",
                        // // aircraft_icao:
                        // "CL60",
                        // // aircraft_icao:
                        // "CL60",
                        // // aircraft_icao:
                        // "CL60",
                        // // aircraft_icao:
                        // "CL60",
                        // // aircraft_icao:
                        // "CL60",
                        // aircraft_icao:
                        "CRJ2",
                        // aircraft_icao:
                        "GL5T",
                        // aircraft_icao:
                        "GLEX",
                        // aircraft_icao:
                        "GL7T",
                        // aircraft_icao:
                        // "GLEX",
                        // aircraft_icao:
                        "GLEX",
                        // aircraft_icao:
                        "LJ31",
                        // aircraft_icao:
                        // "LJ31",
                        // // aircraft_icao:
                        // "LJ31",
                        // aircraft_icao:
                        "LJ35",
                        // aircraft_icao:
                        "LJ35",
                        // aircraft_icao:
                        "LJ40",
                        // aircraft_icao:
                        // "LJ40",
                        // aircraft_icao:
                        "LJ45",
                        // aircraft_icao:
                        // "LJ45",
                        // aircraft_icao:
                        "LJ55",
                        // aircraft_icao:
                        // "LJ55",
                        // aircraft_icao:
                        "LJ60",
                        // aircraft_icao:
                        // "LJ60",
                        // aircraft_icao:
                        "LJ70",
                        // aircraft_icao:
                        "LJ75",
                        // aircraft_icao:
                        // "LJ75",
                        // aircraft_icao:
                        "C55B",
                        // aircraft_icao:
                        "C525",
                        // aircraft_icao:
                        // "C525",
                        // aircraft_icao:
                        "C25A",
                        // aircraft_icao:
                        // "C25A",
                        // aircraft_icao:
                        "C25B",
                        // aircraft_icao:
                        // "C25B",
                        // aircraft_icao:
                        "C25C",
                        // aircraft_icao:
                        // "C560",
                        // aircraft_icao:
                        "C560",
                        // aircraft_icao:
                        "C56X",
                        // aircraft_icao:
                        "C500",
                        // aircraft_icao:
                        "C550",
                        // aircraft_icao:
                        // "C650",
                        // aircraft_icao:
                        "C68A",
                        // aircraft_icao:
                        "C700",
                        // aircraft_icao:
                        "C25M",
                        // aircraft_icao:
                        "C510",
                        // aircraft_icao:
                        "C550",
                        // aircraft_icao:
                        "C680",
                        // aircraft_icao:
                        // "C680",
                        // aircraft_icao:
                        "C560",
                        // aircraft_icao:
                        // "C560",
                        // aircraft_icao:
                        "C650",
                        // aircraft_icao:
                        // "C650",
                        // aircraft_icao:
                        "C750",
                        // aircraft_icao:
                        // "C750",
                        // aircraft_icao:
                        // "C56X",
                        // aircraft_icao:
                        "C56X",
                        // aircraft_icao:
                        "SF50",
                        // aircraft_icao:
                        "FA10",
                        // aircraft_icao:
                        // "FA10",
                        // aircraft_icao:
                        "FA20",
                        // aircraft_icao:
                        "F2TH",
                        // aircraft_icao:
                        // "F2TH",
                        // aircraft_icao:
                        "F2TH",
                        // aircraft_icao:
                        // "F2TH",
                        // aircraft_icao:
                        // "F2TH",
                        // aircraft_icao:
                        // "F2TH",
                        // aircraft_icao:
                        "F2TH",
                        // aircraft_icao:
                        "FA20",
                        // aircraft_icao:
                        "FA50",
                        // aircraft_icao:
                        // "FA50",
                        // // aircraft_icao:
                        // "FA50",
                        // aircraft_icao:
                        "FA6X",
                        // aircraft_icao:
                        "FA7X",
                        // aircraft_icao:
                        "FA8X",
                        // aircraft_icao:
                        "F900",
                        // aircraft_icao:
                        // "F900",
                        // // aircraft_icao:
                        // "F900",
                        // // aircraft_icao:
                        // "F900",
                        // // aircraft_icao:
                        // "F900",
                        // // aircraft_icao:
                        // "F900",
                        // // aircraft_icao:
                        // "F900",
                        // aircraft_icao:
                        "EA50",
                        // aircraft_icao:
                        // "EA50",
                        // aircraft_icao:
                        "E545",
                        // aircraft_icao:
                        "E550",
                        // aircraft_icao:
                        "E35L",
                        // aircraft_icao:
                        // "E35L",
                        // // aircraft_icao:
                        // "E35L",
                        // aircraft_icao:
                        "E190",
                        // aircraft_icao:
                        // "E190",
                        // aircraft_icao:
                        "E50P",
                        // aircraft_icao:
                        // "E50P",
                        // // aircraft_icao:
                        // "E50P",
                        // aircraft_icao:
                        "E55P",
                        // aircraft_icao:
                        // "E55P",
                        // aircraft_icao:
                        "E545",
                        // aircraft_icao:
                        "E550",
                        // aircraft_icao:
                        "ASTR",
                        // aircraft_icao:
                        "G150",
                        // aircraft_icao:
                        "GALX",
                        // aircraft_icao:
                        "G280",
                        // aircraft_icao:
                        // "GLF4",
                        // // aircraft_icao:
                        // "GLF4",
                        // // aircraft_icao:
                        // "GLF4",
                        // // aircraft_icao:
                        // "GLF4",
                        // aircraft_icao:
                        "GLF5",
                        // aircraft_icao:
                        // "GLF5",
                        // aircraft_icao:
                        "GA6C",
                        // aircraft_icao:
                        "GLF6",
                        // aircraft_icao:
                        // "GLF6",
                        // aircraft_icao:
                        "GA7C",
                        // aircraft_icao:
                        "GLF2",
                        // aircraft_icao:
                        "GLF3",
                        // aircraft_icao:
                        "GLF4",
                        // aircraft_icao:
                        // "GLF4",
                        // aircraft_icao:
                        "GLF5",
                        // aircraft_icao:
                        "H25C",
                        // aircraft_icao:
                        "HA4T",
                        // aircraft_icao:
                        "BE40",
                        // aircraft_icao:
                        "H25B",
                        // aircraft_icao:
                        // "H25B",
                        // // aircraft_icao:
                        // "H25B",
                        // // aircraft_icao:
                        // "H25B",
                        // // aircraft_icao:
                        // "H25B",
                        // // aircraft_icao:
                        // "H25B",
                        // // aircraft_icao:
                        // "H25B",
                        // aircraft_icao:
                        "HDJT",
                        // aircraft_icao:
                        "WW24",
                        // aircraft_icao:
                        // "WW24",
                        // aircraft_icao:
                        "MU30",
                        // aircraft_icao:
                        "BE4W",
                        // aircraft_icao:
                        // "BE4W",
                        // aircraft_icao:
                        "PC24",
                        // aircraft_icao:
                        "GA4C",
                        // aircraft_icao:
                        // "GA8C",
                        // aircraft_icao:
                        "CL60",
                        // aircraft_icao:
                        "GL5T",
                        // aircraft_icao:
                        "GLEX",
                        // aircraft_icao:
                        "HDJT",
                    ],
                },
            });
            // Extract the relevant data from the response
            // console.log("response", response.length);
            const data = response.data.response;
            // console.log("dataslice", data?.slice(0, 1));
            console.log("data", data === null || data === void 0 ? void 0 : data.length);
            return false;
            for (let index = 0; index < (data === null || data === void 0 ? void 0 : data.length); index++) {
                const element = (_a = data[index]) === null || _a === void 0 ? void 0 : _a.flight_icao;
                // console.log("elements", data[index]);
                if (element) {
                    const flightcheckup = yield flightdetails_1.FlightDetailsInstance.findOne({
                        where: {
                            FLIGHT_ICAO: (_b = data[index]) === null || _b === void 0 ? void 0 : _b.flight_icao,
                        },
                    });
                    if (!flightcheckup) {
                        const response = yield axios.get(`https://airlabs.co/api/v9/flight?flight_icao=${element}`, {
                            params: {
                                api_key: apiKey,
                            },
                        });
                        // console.log("response", response?.data?.response);
                        const flightdata = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.response;
                        // return false;
                        const Bodys = {
                            REG_NO: ((_d = data[index]) === null || _d === void 0 ? void 0 : _d.reg_number) || 0,
                            HEX: ((_e = data[index]) === null || _e === void 0 ? void 0 : _e.hex) || 0,
                            FLAG: ((_f = data[index]) === null || _f === void 0 ? void 0 : _f.flag) || 0,
                            LAT: ((_g = data[index]) === null || _g === void 0 ? void 0 : _g.lat) || 0,
                            LNG: ((_h = data[index]) === null || _h === void 0 ? void 0 : _h.lng) || 0,
                            ALT: ((_j = data[index]) === null || _j === void 0 ? void 0 : _j.alt) || 0,
                            DIR: ((_k = data[index]) === null || _k === void 0 ? void 0 : _k.dir) || 0,
                            SPEED: ((_l = data[index]) === null || _l === void 0 ? void 0 : _l.speed) || 0,
                            SQUAWK: ((_m = data[index]) === null || _m === void 0 ? void 0 : _m.squawk) || 0,
                            FLIGHT_NUMBER: ((_o = data[index]) === null || _o === void 0 ? void 0 : _o.flight_number) || 0,
                            FLIGHT_ICAO: ((_p = data[index]) === null || _p === void 0 ? void 0 : _p.flight_icao) || 0,
                            FLIGHT_IATA: ((_q = data[index]) === null || _q === void 0 ? void 0 : _q.flight_iata) || 0,
                            DEP_ICAO: ((_r = data[index]) === null || _r === void 0 ? void 0 : _r.dep_icao) || 0,
                            DEP_IATA: ((_s = data[index]) === null || _s === void 0 ? void 0 : _s.dep_iata) || 0,
                            ARR_ICAO: ((_t = data[index]) === null || _t === void 0 ? void 0 : _t.arr_icao) || 0,
                            ARR_IATA: ((_u = data[index]) === null || _u === void 0 ? void 0 : _u.arr_iata) || 0,
                            AIRLINE_ICAO: ((_v = data[index]) === null || _v === void 0 ? void 0 : _v.airline_icao) || 0,
                            AIRLINE_IATA: ((_w = data[index]) === null || _w === void 0 ? void 0 : _w.airline_iata) || 0,
                            AIRCRAFT_ICAO: ((_x = data[index]) === null || _x === void 0 ? void 0 : _x.aircraft_icao) || 0,
                            AGE: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.age) || 0,
                            BUILT: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.built) || 0,
                            ENGINE: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.engine) || 0,
                            ENGINE_COUNT: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.engine_count) || 0,
                            MODEL: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.model) || 0,
                            MANUFACTURER: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.manufacturer) || 0,
                            MSN: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.msn) || 0,
                            TYPE: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.type) || 0,
                            DEP_TIME: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_time) || 0,
                            DEP_ESTIMATED: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_estimated) || 0,
                            DEP_ACTUAL: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_actual) || 0,
                            DEP_TIME_UTC: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_time_utc) || 0,
                            ARR_TIME: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_time) || 0,
                            ARR_ESTIMATED: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_estimated) || 0,
                            ARR_ACTUAL: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_actual) || 0,
                            ARR_TIME_UTC: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_time_utc) || 0,
                            ARR_ESTIMATED_UTC: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_estimated_utc) || 0,
                            ARR_ACTUAL_UTC: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_actual_utc) || 0,
                            DURATION: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.duration) || 0,
                            DEP_NAME: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_name) || 0,
                            DEP_CITY: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_city) || 0,
                            DEP_COUNTRY: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.dep_country) || 0,
                            ARR_NAME: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_name) || 0,
                            ARR_CITY: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_city) || 0,
                            AIRLINE_NAME: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.airline_name) || 0,
                            ARR_COUNTRY: (flightdata === null || flightdata === void 0 ? void 0 : flightdata.arr_country) || 0,
                        };
                        // console.log("Bodys", Bodys);
                        // return false;
                        yield main_service_1.mainService.create_flight_details(Bodys);
                    }
                }
            }
            // Make the POST request to your personal database API to store the data
            // await axios.post("/", data);
            console.log("Data successfully collected and stored.");
        }
        catch (error) {
            console.error("An error occurred while collecting or storing the data:", error);
        }
    });
}
function fetchfleetData(count) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // console.log("fetchfleet started ");
        // var count = 10000;
        console.log("count", count);
        // return false;
        // while (count < 20000) {
        try {
            // Make the GET request to the third-party website
            return false;
            const response = yield axios.get(webLinks, {
                params: {
                    api_key: apiKey,
                    limit: "1000",
                    offset: `${count}`, // Include your API key as a query parameter
                    // aircraft_icao: [
                    //   "PRM1",
                    //   // aircraft_icao:
                    //   // "PRM1",
                    //   // aircraft_icao:
                    //   "CL30",
                    //   // aircraft_icao:
                    //   "CL35",
                    //   // aircraft_icao:
                    //   "CL60",
                    //   // aircraft_icao:
                    //   // "CL60",
                    //   // // aircraft_icao:
                    //   // "CL60",
                    //   // // aircraft_icao:
                    //   // "CL60",
                    //   // // aircraft_icao:
                    //   // "CL60",
                    //   // // aircraft_icao:
                    //   // "CL60",
                    //   // // aircraft_icao:
                    //   // "CL60",
                    //   // // aircraft_icao:
                    //   // "CL60",
                    //   // aircraft_icao:
                    //   "CRJ2",
                    //   // aircraft_icao:
                    //   "GL5T",
                    //   // aircraft_icao:
                    //   "GLEX",
                    //   // aircraft_icao:
                    //   "GL7T",
                    //   // aircraft_icao:
                    //   // "GLEX",
                    //   // aircraft_icao:
                    //   "GLEX",
                    //   // aircraft_icao:
                    //   "LJ31",
                    //   // aircraft_icao:
                    //   // "LJ31",
                    //   // // aircraft_icao:
                    //   // "LJ31",
                    //   // aircraft_icao:
                    //   "LJ35",
                    //   // aircraft_icao:
                    //   "LJ35",
                    //   // aircraft_icao:
                    //   "LJ40",
                    //   // aircraft_icao:
                    //   // "LJ40",
                    //   // aircraft_icao:
                    //   "LJ45",
                    //   // aircraft_icao:
                    //   // "LJ45",
                    //   // aircraft_icao:
                    //   "LJ55",
                    //   // aircraft_icao:
                    //   // "LJ55",
                    //   // aircraft_icao:
                    //   "LJ60",
                    //   // aircraft_icao:
                    //   // "LJ60",
                    //   // aircraft_icao:
                    //   "LJ70",
                    //   // aircraft_icao:
                    //   "LJ75",
                    //   // aircraft_icao:
                    //   // "LJ75",
                    //   // aircraft_icao:
                    //   "C55B",
                    //   // aircraft_icao:
                    //   "C525",
                    //   // aircraft_icao:
                    //   // "C525",
                    //   // aircraft_icao:
                    //   "C25A",
                    //   // aircraft_icao:
                    //   // "C25A",
                    //   // aircraft_icao:
                    //   "C25B",
                    //   // aircraft_icao:
                    //   // "C25B",
                    //   // aircraft_icao:
                    //   "C25C",
                    //   // aircraft_icao:
                    //   // "C560",
                    //   // aircraft_icao:
                    //   "C560",
                    //   // aircraft_icao:
                    //   "C56X",
                    //   // aircraft_icao:
                    //   "C500",
                    //   // aircraft_icao:
                    //   "C550",
                    //   // aircraft_icao:
                    //   // "C650",
                    //   // aircraft_icao:
                    //   "C68A",
                    //   // aircraft_icao:
                    //   "C700",
                    //   // aircraft_icao:
                    //   "C25M",
                    //   // aircraft_icao:
                    //   "C510",
                    //   // aircraft_icao:
                    //   "C550",
                    //   // aircraft_icao:
                    //   "C680",
                    //   // aircraft_icao:
                    //   // "C680",
                    //   // aircraft_icao:
                    //   "C560",
                    //   // aircraft_icao:
                    //   // "C560",
                    //   // aircraft_icao:
                    //   "C650",
                    //   // aircraft_icao:
                    //   // "C650",
                    //   // aircraft_icao:
                    //   "C750",
                    //   // aircraft_icao:
                    //   // "C750",
                    //   // aircraft_icao:
                    //   // "C56X",
                    //   // aircraft_icao:
                    //   "C56X",
                    //   // aircraft_icao:
                    //   "SF50",
                    //   // aircraft_icao:
                    //   "FA10",
                    //   // aircraft_icao:
                    //   // "FA10",
                    //   // aircraft_icao:
                    //   "FA20",
                    //   // aircraft_icao:
                    //   "F2TH",
                    //   // aircraft_icao:
                    //   // "F2TH",
                    //   // aircraft_icao:
                    //   "F2TH",
                    //   // aircraft_icao:
                    //   // "F2TH",
                    //   // aircraft_icao:
                    //   // "F2TH",
                    //   // aircraft_icao:
                    //   // "F2TH",
                    //   // aircraft_icao:
                    //   "F2TH",
                    //   // aircraft_icao:
                    //   "FA20",
                    //   // aircraft_icao:
                    //   "FA50",
                    //   // aircraft_icao:
                    //   // "FA50",
                    //   // // aircraft_icao:
                    //   // "FA50",
                    //   // aircraft_icao:
                    //   "FA6X",
                    //   // aircraft_icao:
                    //   "FA7X",
                    //   // aircraft_icao:
                    //   "FA8X",
                    //   // aircraft_icao:
                    //   "F900",
                    //   // aircraft_icao:
                    //   // "F900",
                    //   // // aircraft_icao:
                    //   // "F900",
                    //   // // aircraft_icao:
                    //   // "F900",
                    //   // // aircraft_icao:
                    //   // "F900",
                    //   // // aircraft_icao:
                    //   // "F900",
                    //   // // aircraft_icao:
                    //   // "F900",
                    //   // aircraft_icao:
                    //   "EA50",
                    //   // aircraft_icao:
                    //   // "EA50",
                    //   // aircraft_icao:
                    //   "E545",
                    //   // aircraft_icao:
                    //   "E550",
                    //   // aircraft_icao:
                    //   "E35L",
                    //   // aircraft_icao:
                    //   // "E35L",
                    //   // // aircraft_icao:
                    //   // "E35L",
                    //   // aircraft_icao:
                    //   "E190",
                    //   // aircraft_icao:
                    //   // "E190",
                    //   // aircraft_icao:
                    //   "E50P",
                    //   // aircraft_icao:
                    //   // "E50P",
                    //   // // aircraft_icao:
                    //   // "E50P",
                    //   // aircraft_icao:
                    //   "E55P",
                    //   // aircraft_icao:
                    //   // "E55P",
                    //   // aircraft_icao:
                    //   "E545",
                    //   // aircraft_icao:
                    //   "E550",
                    //   // aircraft_icao:
                    //   "ASTR",
                    //   // aircraft_icao:
                    //   "G150",
                    //   // aircraft_icao:
                    //   "GALX",
                    //   // aircraft_icao:
                    //   "G280",
                    //   // aircraft_icao:
                    //   // "GLF4",
                    //   // // aircraft_icao:
                    //   // "GLF4",
                    //   // // aircraft_icao:
                    //   // "GLF4",
                    //   // // aircraft_icao:
                    //   // "GLF4",
                    //   // aircraft_icao:
                    //   "GLF5",
                    //   // aircraft_icao:
                    //   // "GLF5",
                    //   // aircraft_icao:
                    //   "GA6C",
                    //   // aircraft_icao:
                    //   "GLF6",
                    //   // aircraft_icao:
                    //   // "GLF6",
                    //   // aircraft_icao:
                    //   "GA7C",
                    //   // aircraft_icao:
                    //   "GLF2",
                    //   // aircraft_icao:
                    //   "GLF3",
                    //   // aircraft_icao:
                    //   "GLF4",
                    //   // aircraft_icao:
                    //   // "GLF4",
                    //   // aircraft_icao:
                    //   "GLF5",
                    //   // aircraft_icao:
                    //   "H25C",
                    //   // aircraft_icao:
                    //   "HA4T",
                    //   // aircraft_icao:
                    //   "BE40",
                    //   // aircraft_icao:
                    //   "H25B",
                    //   // aircraft_icao:
                    //   // "H25B",
                    //   // // aircraft_icao:
                    //   // "H25B",
                    //   // // aircraft_icao:
                    //   // "H25B",
                    //   // // aircraft_icao:
                    //   // "H25B",
                    //   // // aircraft_icao:
                    //   // "H25B",
                    //   // // aircraft_icao:
                    //   // "H25B",
                    //   // aircraft_icao:
                    //   "HDJT",
                    //   // aircraft_icao:
                    //   "WW24",
                    //   // aircraft_icao:
                    //   // "WW24",
                    //   // aircraft_icao:
                    //   "MU30",
                    //   // aircraft_icao:
                    //   "BE4W",
                    //   // aircraft_icao:
                    //   // "BE4W",
                    //   // aircraft_icao:
                    //   "PC24",
                    //   // aircraft_icao:
                    //   "GA4C",
                    //   // aircraft_icao:
                    //   // "GA8C",
                    //   // aircraft_icao:
                    //   "CL60",
                    //   // aircraft_icao:
                    //   "GL5T",
                    //   // aircraft_icao:
                    //   "GLEX",
                    //   // aircraft_icao:
                    //   "HDJT",
                    // ],
                },
            });
            // Extract the relevant data from the response
            // console.log("response", response.length);
            const data = response.data.response;
            // console.log("dataslice", data?.slice(0, 1));
            console.log("fleet data", data === null || data === void 0 ? void 0 : data.length);
            // return false;
            // var aircraftdata=[];
            for (let index = 0; index < (data === null || data === void 0 ? void 0 : data.length); index++) {
                const element = data[index].airline_iata;
                // console.log("elements", data[index]);
                if ((data === null || data === void 0 ? void 0 : data.length) == index) {
                    // count = count + 10000;
                    console.log("count increses");
                    return count;
                }
                const hexchecker = yield flightdetails_1.FlightDetailsInstance.findAll({
                    where: {
                        AIRLINE_IATA: element,
                    },
                });
                console.log("checker", hexchecker === null || hexchecker === void 0 ? void 0 : hexchecker.length);
                // return false;
                for (let index = 0; index < (hexchecker === null || hexchecker === void 0 ? void 0 : hexchecker.length); index++) {
                    const element = (_a = hexchecker === null || hexchecker === void 0 ? void 0 : hexchecker[index]) === null || _a === void 0 ? void 0 : _a.FLIGHT_ID;
                    if (element) {
                        const result = yield flightdetails_1.FlightDetailsInstance.update({
                            IS_FLEET: "Yes",
                        }, {
                            where: {
                                FLIGHT_ID: element,
                            },
                        });
                        // return result;
                    }
                }
                // if (hexchecker) {
                //   return false;
                // }
                // if (hexchecker) {
                //   const result = await FlightDetailsInstance.update(
                //     {
                //       IS_FLEET: "Yes",
                //     },
                //     {
                //       where: {
                //         HEX: element,
                //       },
                //     }
                //   );
                //   return result;
                // }
            }
            // Make the POST request to your personal database API to store the data
            // await axios.post("/", data);
            console.log("Data successfully collected and stored.");
            console.log("count", count);
        }
        catch (error) {
            console.error("An error occurred while collecting or storing the data:", error);
        }
    });
}
// Run the fetchData function initially
fetchData();
var count = 10000;
fetchfleetData(count);
// Schedule the fetchData function to run every 5 minutes
setInterval(fetchData, 360 * 60 * 1000);
setInterval(() => {
    while (count < 200000) {
        const result = fetchfleetData(count);
        console.log("results", result);
        // if(result){
        count = count + 10000;
        // }
    }
}, 360 * 60 * 1000);
setInterval(fetchfleetData, 360 * 60 * 1000); // 5 minutes = 5 * 60 * 1000 milliseconds
// var minutes = 0.2,
//   the_interval = minutes * 60 * 1000;
// setInterval(function () {
//   console.log("i'm doing 5 minutes check");
//   // app.get
// }, the_interval);
//upload image
exports.app.use("*/images", express_1.default.static("public/uploads"));
exports.app.use("*/consent", express_1.default.static("public/attachments"));
// send back a 404 error for any unknown api request
exports.app.use((req, res, next) => {
    next(new ApiError_1.ApiError(http_status_1.default.NOT_FOUND, "Not found"));
});
// convert error to ApiError, if needed
exports.app.use(error_1.errorConverter);
// handle error
exports.app.use(error_1.errorHandler);
//# sourceMappingURL=server.js.map