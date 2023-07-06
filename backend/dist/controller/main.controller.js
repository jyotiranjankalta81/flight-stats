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
exports.MainController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const main_service_1 = require("../service/main.service");
const catchAsync_1 = require("../utils/catchAsync");
const stripe = require("stripe")("sk_test_51L2wFuSIakMfogRlbY0t1gPUKf7bbZyMkEdWELrX98T6LsBPeOV2Y0R4BkEDWBo7v4sCJ98x5aQBjtqPjsCk7FB400v9cTQOMM");
class MainControllerClass {
    constructor() {
        this.getFlightDetails = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.getFlightDetails(req);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: "Your Form has subbmitted successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.postAircraftClass = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.getFlightDetails(req);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: "Your Form has subbmitted successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.getAirCraftClass = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.getAirCraftClass(req);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: "Your Form has subbmitted successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
    }
}
exports.MainController = new MainControllerClass();
//# sourceMappingURL=main.controller.js.map