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
const getstarted_model_1 = require("./../model/getstarted.model");
const onboarding_model_1 = require("../model/onboarding.model");
const contactus_1 = require("../model/contactus");
const flightdetails_1 = require("../model/flightdetails");
const order_model_1 = require("../model/order.model");
const randomnumber_1 = require("../utils/randomnumber");
const orderextense_model_1 = require("../model/orderextense.model");
const sendMail_1 = require("../utils/sendMail");
const consentone_1 = require("../template/consentone");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config/config");
const consenttwo_1 = require("../template/consenttwo");
const imageupload_1 = require("../utils/imageupload");
const processlog_model_1 = require("../model/processlog.model");
const PartnerUs_model_1 = require("../model/PartnerUs.model");
const moment_1 = __importDefault(require("moment"));
const db_connection_1 = require("../db/db-connection");
const sequelize_1 = require("sequelize");
const uploadconsent_1 = require("../template/uploadconsent");
const getonboardhome_model_1 = require("../model/getonboardhome.model");
const subscribe_model_1 = require("../model/subscribe.model");
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env") });
class mainServiceClass {
    constructor() {
        this.create_contactus = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield contactus_1.ContactusInstance.create({
                FIRSTNAME: req.body.FIRSTNAME,
                LASTNAME: req.body.LASTNAME,
                PHONE: req.body.PHONE,
                EMAIL: req.body.EMAIL,
                MESSAGE: req.body.MESSAGE,
            });
            return result;
        });
        this.create_flight_details = (bodys) => __awaiter(this, void 0, void 0, function* () {
            // console.log("FlightIcao", bodys.FLIGHT_ICAO);
            // const flightchecker = await FlightDetailsInstance.findOne({
            //   where: {
            //     FLIGHT_ICAO: bodys?.FLIGHT_ICAO,
            //   },
            // });
            // console.log("flidhtchecker", flightchecker);
            // if (!flightchecker) {
            // console.log("we working");
            const result = yield flightdetails_1.FlightDetailsInstance.create({
                REG_NO: bodys.REG_NO,
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
            });
            //   console.log("result", result);
            return result;
            // }
        });
        this.getFlightDetails = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield flightdetails_1.FlightDetailsInstance.findAll();
            if (result) {
                console.log("result", result === null || result === void 0 ? void 0 : result[0].FLIGHT_ID);
            }
            return result;
        });
        this.get_started = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield getstarted_model_1.GetStartedInstance.create({
                FIRSTNAME: req.body.FIRSTNAME,
                LASTNAME: req.body.LASTNAME,
                EMAIL: req.body.EMAIL,
                PHONE: req.body.PHONE,
            });
            return result;
        });
        this.subscribe = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield subscribe_model_1.SubscribeInstance.create({
                EMAIL: req.body.EMAIL,
            });
            return result;
        });
        this.get_subscribe = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield subscribe_model_1.SubscribeInstance.findAll();
            return result;
        });
        this.get_Started = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield getstarted_model_1.GetStartedInstance.findAll();
            return result;
        });
        this.get_in_touch = (body, files) => __awaiter(this, void 0, void 0, function* () {
            let images = null;
            if (files.BODY_FILE) {
                images = (0, imageupload_1.uploadimage)(files.BODY_FILE);
            }
            const result = yield onboarding_model_1.OnBoardingInstance.create({
                FIRSTNAME: body.FIRSTNAME,
                LASTNAME: body.LASTNAME,
                EMAIL: body.EMAIL,
                ABOUT: body.ABOUT,
                BODY_FILE: images,
            });
            return result;
        });
        this.check_status = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT tbl_order.STATUS FROM tbl_order LEFT JOIN tbl_ordeextense ON tbl_ordeextense.ORDER_ID  = tbl_order.ORDER_ID WHERE tbl_ordeextense.NORMAL_ID = '${req.body.ORDER_ID}' OR tbl_ordeextense.SPECIAL_ID = '${req.body.ORDER_ID}'`, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.get_onboard_home = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield getonboardhome_model_1.GetOnBoardHomeInstance.create({
                NAME: req.body.NAME,
                EMAIL: req.body.EMAIL,
                CONTACTUS: req.body.CONTACTUS,
                ADDRESS: req.body.ADDRESS,
                MESSAGE: req.body.MESSAGE,
            });
            return result;
        });
        this.create_patner = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield PartnerUs_model_1.PartnerusInstance.create({
                FULLNAME: req.body.FULLNAME,
                EMAIL: req.body.EMAIL,
                WHATSAPP: req.body.WHATSAPP,
                MESSAGE: req.body.MESSAGE,
            });
            return result;
        });
        this.CreateProcessLog = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield processlog_model_1.ProcessLogModel.create({
                ORDER_ID: req.ORDER_ID,
                PROCESS_STATUS: true,
                PERPOUS: req.PERPOUS,
            });
            return result;
        });
        this.create_order = (req, header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield order_model_1.OrderInstance.create({
                ORDER_TYPE: req.body.ORDER_TYPE,
                F_NAME: req.body.F_NAME,
                L_NAME: req.body.L_NAME,
                DOB: req.body.DOB,
                VISA_APP_NO: req.body.VISA_APP_NO,
                EMAIL: req.body.EMAIL,
                PATNER_TYPE: req.body.PATNER_TYPE,
                SUPPOSE_F_NAME: req.body.SUPPOSE_F_NAME,
                SUPPOSE_L_NAME: req.body.SUPPOSE_L_NAME,
                SUPPOSE_DOB: req.body.SUPPOSE_DOB,
                UCI_NUMBER: req.body.UCI_NUMBER,
                ATIP: req.body.ATIP,
                HEAR_CMT: req.body.HEAR_CMT,
                APPLIED_BY: header.sub,
            });
            return result;
        });
        this.create_order_extense = (req, order1) => __awaiter(this, void 0, void 0, function* () {
            const randomnumber = (0, randomnumber_1.randomgenrator)(7);
            const result = yield orderextense_model_1.OrderextenseInstance.create({
                ORDER_ID: order1.dataValues.ORDER_ID,
                NORMAL_ID: randomnumber,
                SPECIAL_ID: null,
                DOCUMENT_STATUS: false,
                DOCUMENTS: null,
                PAYMENT_TYPE: req.body.PAYMENT_TYPE,
                PAYMENT_ID: req.body.PAYMENT_ID,
                NOTES_APPLIEDON: null,
                NOTES_APPLIEDBY: null,
                COMPLETION_DATE: null,
                COMPLETED_BY: null,
            });
            return result;
        });
        this.send_mail = (req, order) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.ORDER_TYPE === 1 ||
                req.body.ORDER_TYPE === 2 ||
                req.body.ORDER_TYPE === 3 ||
                req.body.ORDER_TYPE === 4) {
                const nodemail = yield (0, sendMail_1.sendMail)(req.body.EMAIL, "GCMSBuddy - Complete Your GCMS Notes Order", "", (0, consentone_1.consentone_body)(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config_1.config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config_1.config.backendurl}consent/CBSA_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${order === null || order === void 0 ? void 0 : order.NORMAL_ID}`));
                return nodemail;
            }
            else if (req.body.ORDER_TYPE === 5) {
                const nodemail = yield (0, sendMail_1.sendMail)(req.body.EMAIL, "GCMSBuddy - Complete Your CBSA Notes Order", "", (0, consenttwo_1.consenttwo_body)(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config_1.config.backendurl}consent/GCMS_Consent_Form.pdf`, `${config_1.config.backendurl}consent/GCMS_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${order === null || order === void 0 ? void 0 : order.NORMAL_ID}`));
                return nodemail;
            }
            else {
                const nodemail = yield (0, sendMail_1.sendMail)(req.body.EMAIL, "GCMSBuddy - Complete Your GCMS Notes Order", "", (0, consentone_1.consentone_body)(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config_1.config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config_1.config.backendurl}consent/CBSA_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${order === null || order === void 0 ? void 0 : order.NORMAL_ID}`));
                return nodemail;
            }
        });
        this.uploadConstant = (ORDER_ID, files) => __awaiter(this, void 0, void 0, function* () {
            let constantpdf = null;
            if (files.Constantpdf) {
                constantpdf = (0, imageupload_1.uploadimage)(files.Constantpdf);
            }
            const result = yield orderextense_model_1.OrderextenseInstance.update({
                DOCUMENT_STATUS: true,
                DOCUMENTS: constantpdf,
                COMPLETION_DATE: (0, moment_1.default)(new Date())
                    .add(35, "d")
                    .format("YYYY/MM/DD HH:mm:ss"),
            }, {
                where: {
                    NORMAL_ID: ORDER_ID,
                },
            });
            return result;
        });
        this.getOrdereId = (ORDER_ID) => __awaiter(this, void 0, void 0, function* () {
            const result = yield orderextense_model_1.OrderextenseInstance.findOne({
                where: {
                    NORMAL_ID: ORDER_ID,
                },
            });
            return result;
        });
        this.getemailbyorder = (ORDER_ID) => __awaiter(this, void 0, void 0, function* () {
            const result = yield order_model_1.OrderInstance.findOne({
                where: {
                    ORDER_ID: ORDER_ID,
                },
            });
            return result;
        });
        this.UploadConsentEmail = (EMAIL, TRACKING_ID) => __awaiter(this, void 0, void 0, function* () {
            const nodemail = yield (0, sendMail_1.sendMail)(EMAIL, "GCMSBuddy - Consent Uploaded Successfully", "", (0, uploadconsent_1.uploadconsent)(TRACKING_ID));
            return nodemail;
        });
    }
}
exports.mainService = new mainServiceClass();
//# sourceMappingURL=main.service.js.map