"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainrouter = void 0;
const express_1 = __importDefault(require("express"));
const main_controller_1 = require("../../controller/main.controller");
exports.mainrouter = express_1.default.Router();
exports.mainrouter.get("/flight-details", main_controller_1.MainController.getFlightDetails);
exports.mainrouter.post("/aircraft-class", main_controller_1.MainController.postAircraftClass);
exports.mainrouter.get("/aircraft-class", main_controller_1.MainController.getAirCraftClass);
//# sourceMappingURL=main.routes.js.map