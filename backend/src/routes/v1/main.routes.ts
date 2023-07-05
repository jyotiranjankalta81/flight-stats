import express, { Express, Response, Request } from "express";
import { auth } from "../../middlewares/auth";
import { MainController } from "../../controller/main.controller";
export const mainrouter = express.Router();

mainrouter.get("/flight-details", MainController.getFlightDetails);
