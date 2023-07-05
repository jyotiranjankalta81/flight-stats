import express, { Express } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import httpStatus from "http-status";
import { config } from "./config/config";
import { morgans } from "./config/morgan";
import { authLimiter } from "./middlewares/rateLimiter";
import { errorConverter, errorHandler } from "./middlewares/error";
import { ApiError } from "./utils/ApiError";
import router from "./routes/v1";
import passport from "passport";
const axios = require("axios");
import { jwtStrategy } from "./config/passport";
import { mainService } from "./service/main.service";
import { catchAsync } from "./utils/catchAsync";
import { FlightDetailsInstance } from "./model/flightdetails";
const expressFileUpload = require("express-fileupload");
const webLink = "https://airlabs.co/api/v9/flights?"; // Replace with the actual URL of the third-party website
const webLinks = "https://airlabs.co/api/v9/fleets?";

const apiKey = config.apiKey;

export const app: Express = express();
if (config.env !== "test") {
  app.use(morgans.successHandler);
  app.use(morgans.errorHandler);
}

app.use(expressFileUpload());
// set security HTTP headers
app.use(helmet());
// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// sanitize request data
// app.use(xss());
// gzip compression
app.use(compression());
// enable cors
app.use(cors());
app.options("*", cors());

//pasport
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// limit repeated failed requests to auth endpoints
if (config.env === "production") {
  app.use("/api/auth", authLimiter);
}

// v1 api routes
app.use("/api", router);
app.get("/demo", async (req, res) => {
  res.send("server working properly");
});

async function fetchData() {
  try {
    // Make the GET request to the third-party website
    return false;

    const response = await axios.get(webLink, {
      params: {
        api_key: apiKey, // Include your API key as a query parameter
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
    console.log("data", data?.length);

    return false;

    for (let index = 0; index < data?.length; index++) {
      const element = data[index]?.flight_icao;
      // console.log("elements", data[index]);
      if (element) {
        const flightcheckup = await FlightDetailsInstance.findOne({
          where: {
            FLIGHT_ICAO: data[index]?.flight_icao,
          },
        });

        if (!flightcheckup) {
          const response = await axios.get(
            `https://airlabs.co/api/v9/flight?flight_icao=${element}`,
            {
              params: {
                api_key: apiKey,
              },
            }
          );

          // console.log("response", response?.data?.response);
          const flightdata = response?.data?.response;
          // return false;
          const Bodys = {
            REG_NO: data[index]?.reg_number || 0,
            HEX: data[index]?.hex || 0,
            FLAG: data[index]?.flag || 0,
            LAT: data[index]?.lat || 0,
            LNG: data[index]?.lng || 0,
            ALT: data[index]?.alt || 0,
            DIR: data[index]?.dir || 0,
            SPEED: data[index]?.speed || 0,
            SQUAWK: data[index]?.squawk || 0,
            FLIGHT_NUMBER: data[index]?.flight_number || 0,
            FLIGHT_ICAO: data[index]?.flight_icao || 0,
            FLIGHT_IATA: data[index]?.flight_iata || 0,
            DEP_ICAO: data[index]?.dep_icao || 0,
            DEP_IATA: data[index]?.dep_iata || 0,
            ARR_ICAO: data[index]?.arr_icao || 0,
            ARR_IATA: data[index]?.arr_iata || 0,
            AIRLINE_ICAO: data[index]?.airline_icao || 0,
            AIRLINE_IATA: data[index]?.airline_iata || 0,
            AIRCRAFT_ICAO: data[index]?.aircraft_icao || 0,
            AGE: flightdata?.age || 0,
            BUILT: flightdata?.built || 0,
            ENGINE: flightdata?.engine || 0,
            ENGINE_COUNT: flightdata?.engine_count || 0,
            MODEL: flightdata?.model || 0,
            MANUFACTURER: flightdata?.manufacturer || 0,
            MSN: flightdata?.msn || 0,
            TYPE: flightdata?.type || 0,
            DEP_TIME: flightdata?.dep_time || 0,
            DEP_ESTIMATED: flightdata?.dep_estimated || 0,
            DEP_ACTUAL: flightdata?.dep_actual || 0,
            DEP_TIME_UTC: flightdata?.dep_time_utc || 0,
            ARR_TIME: flightdata?.arr_time || 0,
            ARR_ESTIMATED: flightdata?.arr_estimated || 0,
            ARR_ACTUAL: flightdata?.arr_actual || 0,
            ARR_TIME_UTC: flightdata?.arr_time_utc || 0,
            ARR_ESTIMATED_UTC: flightdata?.arr_estimated_utc || 0,
            ARR_ACTUAL_UTC: flightdata?.arr_actual_utc || 0,
            DURATION: flightdata?.duration || 0,
            DEP_NAME: flightdata?.dep_name || 0,
            DEP_CITY: flightdata?.dep_city || 0,
            DEP_COUNTRY: flightdata?.dep_country || 0,
            ARR_NAME: flightdata?.arr_name || 0,
            ARR_CITY: flightdata?.arr_city || 0,
            AIRLINE_NAME: flightdata?.airline_name || 0,
            ARR_COUNTRY: flightdata?.arr_country || 0,
          };
          // console.log("Bodys", Bodys);
          // return false;

          await mainService.create_flight_details(Bodys);
        }
      }
    }

    // Make the POST request to your personal database API to store the data
    // await axios.post("/", data);

    console.log("Data successfully collected and stored.");
  } catch (error) {
    console.error(
      "An error occurred while collecting or storing the data:",
      error
    );
  }
}

async function fetchfleetData() {
  // console.log("fetchfleet started ");
  var count = 10000;
  return false;

  // while (count < 20000) {

  for (let index = 0; count < 300000; index++) {
    // const element = array[index];
    try {
      // Make the GET request to the third-party website
      return false;

      const response = await axios.get(webLinks, {
        params: {
          api_key: apiKey,
          limit: "1000",
          offset: `${count}`, // Include your API key as a query parameter
        },
      });
      const data = response.data.response;
      console.log("fleet data", data?.length);

      for (let index = 0; index < data?.length; index++) {
        const element = data[index].airline_iata;
        // console.log("elements", data[index]);
        const hexchecker = await FlightDetailsInstance.findAll({
          where: {
            AIRLINE_IATA: element,
          },
        });

        console.log("checker", hexchecker?.length);
        // return false;
        for (let index = 0; index < hexchecker?.length; index++) {
          const element = hexchecker?.[index]?.FLIGHT_ID;
          if (element) {
            const result = await FlightDetailsInstance.update(
              {
                IS_FLEET: "Yes",
              },
              {
                where: {
                  FLIGHT_ID: element,
                },
              }
            );
            // return result;
          }
        }
      }
    } catch (error) {
      console.error(
        "An error occurred while collecting or storing the data:",
        error
      );
    }

    count = count + 10000;
    return count;
  }
}

// Run the fetchData function initially
fetchData();
fetchfleetData();

// Schedule the fetchData function to run every 5 minutes
setInterval(fetchData, 360 * 60 * 1000);
setInterval(fetchfleetData, 360 * 60 * 1000); // 5 minutes = 5 * 60 * 1000 milliseconds

//upload image
app.use("*/images", express.static("public/uploads"));
app.use("*/consent", express.static("public/attachments"));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
