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
exports.AdminService = void 0;
const db_connection_1 = require("../db/db-connection");
const sequelize_1 = require("sequelize");
const blogs_model_1 = require("../model/blogs.model.");
const PartnerUs_model_1 = require("../model/PartnerUs.model");
const sendMail_1 = require("../utils/sendMail");
const consentone_1 = require("../template/consentone");
const consenttwo_1 = require("../template/consenttwo");
const config_1 = require("../config/config");
const imageupload_1 = require("../utils/imageupload");
const orderextense_model_1 = require("../model/orderextense.model");
const moment_1 = __importDefault(require("moment"));
const order_model_1 = require("../model/order.model");
const user_model_1 = require("../model/user.model");
const emaillog_model_1 = require("../model/emaillog.model");
const contactus_1 = require("../model/contactus");
const subscribe_model_1 = require("../model/subscribe.model");
const onboarding_model_1 = require("../model/onboarding.model");
const getstarted_model_1 = require("../model/getstarted.model");
const getonboardhome_model_1 = require("../model/getonboardhome.model");
const section1_model_1 = require("../model/section1.model");
const Section2_model_1 = require("../model/Section2.model");
const section3_model_1 = require("../model/section3.model");
const reviews_model_1 = require("../model/reviews.model");
class AdminServiceClass {
    constructor() {
        this.AllGetOrder = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT *  FROM tbl_order LEFT JOIN tbl_ordeextense on tbl_ordeextense.ORDER_ID = tbl_order.ORDER_ID 
          `, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.GetAllUser = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query('SELECT `ID`, `USERROLE`, `USERNAME`, `F_NAME`, `L_NAME`, `EMAIL`, `createdAt` FROM `tbl_user` WHERE 1', {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.get_contactus = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query('SELECT  `CONTACTUS_ID`,`FIRSTNAME`,`LASTNAME`, `PHONE`, `EMAIL`, `MESSAGE`, `createdAt` FROM `tbl_contactus`', {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.get_in_touch_home = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query('SELECT  `OBH_ID`,`NAME`, `EMAIL`, `CONTACTUS`, `ADDRESS`, `MESSAGE`, `createdAt` FROM `tbl_get_onboard_home`', {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.get_onboarding = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query('SELECT  `OB_ID`,`FIRSTNAME`,LASTNAME, `EMAIL`, `ABOUT`, `BODY_FILE`, `createdAt` FROM `tbl_onboarding`', {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.get_partnerus = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield PartnerUs_model_1.PartnerusInstance.findAll();
            return result;
        });
        this.Process_log = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT tbl_processlog.* FROM tbl_processlog LEFT JOIN tbl_ordeextense ON tbl_ordeextense.ORDER_ID = tbl_processlog.ORDER_ID WHERE tbl_ordeextense.NORMAL_ID = '${req.body.ORDER_ID}' OR tbl_ordeextense.SPECIAL_ID = '${req.body.ORDER_ID}'`, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.awaiting_consent = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT * FROM tbl_ordeextense LEFT JOIN tbl_order ON tbl_order.ORDER_ID = tbl_ordeextense.ORDER_ID where tbl_ordeextense.DOCUMENT_STATUS = ${false} AND tbl_ordeextense.createdAt < (now() - INTERVAL 72 HOUR);`, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.consentAwait_mail = (req) => __awaiter(this, void 0, void 0, function* () {
            if (req.ORDER_TYPE === 1 || req.ORDER_TYPE === 2 || req.ORDER_TYPE === 3 || req.ORDER_TYPE === 4) {
                const nodemail = yield (0, sendMail_1.sendMail)(req.EMAIL, "GCMSBuddy - Awaiting consent of Your GCMS Notes Order", "", (0, consentone_1.consentone_body)(`${req.F_NAME} ${req.L_NAME}`, `${config_1.config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config_1.config.backendurl}consent/CBSA_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${req.NORMAL_ID}`));
                return nodemail;
            }
            if (req.ORDER_TYPE === 5) {
                const nodemail = yield (0, sendMail_1.sendMail)(req.EMAIL, "GCMSBuddy - Awaiting consent of Your GCMS Notes Order", "", (0, consenttwo_1.consenttwo_body)(`${req.F_NAME} ${req.L_NAME}`, `${config_1.config.backendurl}consent/GCMS_Consent_Form.pdf`, `${config_1.config.backendurl}consent/GCMS_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${req.NORMAL_ID}`));
                return nodemail;
            }
        });
        this.create_blog = (body, files) => __awaiter(this, void 0, void 0, function* () {
            let images = null;
            if (files.IMAGE) {
                images = (0, imageupload_1.uploadimage)(files.IMAGE);
            }
            const result = yield blogs_model_1.BlogsInstance.create({
                IMAGE: images,
                HEADING: body.HEADING,
                CONTENT: body.CONTENT,
                TAGS: body.TAGS,
                LIKE: 0,
                ADDED_BY: 1,
            });
            return result;
        });
        this.section1 = (body, files) => __awaiter(this, void 0, void 0, function* () {
            let images = null;
            if (files.IMAGE) {
                images = (0, imageupload_1.uploadimage)(files.IMAGE);
            }
            const result = yield section1_model_1.Section1Instance.create({
                IMAGE: images,
                TITLE: body.TITLE,
                CONTENT: body.CONTENT,
                NAME: body.NAME,
                ADDED_BY: 1,
            });
            return result;
        });
        this.customer_reviews = (body, files) => __awaiter(this, void 0, void 0, function* () {
            let images = null;
            if (files.IMAGE) {
                images = (0, imageupload_1.uploadimage)(files.IMAGE);
            }
            const result = yield reviews_model_1.CustomerReviewsInstance.create({
                IMAGE: images,
                NAME: body.NAME,
                CONTENT: body.CONTENT,
                DESIGNATION: body.DESIGNATION,
                ADDED_BY: 1,
            });
            return result;
        });
        this.get_customer_reviews = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield reviews_model_1.CustomerReviewsInstance.findAll();
            return result;
        });
        this.delete_customer_reviews = (header) => __awaiter(this, void 0, void 0, function* () {
            console.log(header);
            const result = yield reviews_model_1.CustomerReviewsInstance.destroy({
                where: {
                    RE_ID: parseInt(header.RE_ID)
                }
            });
            return result;
        });
        this.get_section1 = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield section1_model_1.Section1Instance.findAll();
            return result;
        });
        this.section2 = (body) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Section2_model_1.Section2Instance.create({
                HEADING: body.HEADING,
                TITLE: body.TITLE,
                CONTENT: body.CONTENT,
                NAME: body.NAME,
                ADDED_BY: 1,
            });
            return result;
        });
        this.get_section2 = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield Section2_model_1.Section2Instance.findAll();
            return result;
        });
        this.get_section3 = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield section3_model_1.Section3Instance.findAll();
            return result;
        });
        this.section3 = (body) => __awaiter(this, void 0, void 0, function* () {
            const result = yield section3_model_1.Section3Instance.create({
                HEADING: body.HEADING,
                CONTENT: body.CONTENT,
                NAME: body.NAME,
                ADDED_BY: 1,
            });
            return result;
        });
        this.delete_section1 = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield section1_model_1.Section1Instance.destroy({
                where: {
                    SE_ID: parseInt(header.SE_ID)
                }
            });
            return result;
        });
        this.my_create_blog = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield blogs_model_1.BlogsInstance.findAll({
                where: {
                    ADDED_BY: header.sub
                }
            });
            return result;
        });
        this.delete_contact = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield contactus_1.ContactusInstance.destroy({
                where: {
                    CONTACTUS_ID: parseInt(header.CONTACTUS_ID)
                }
            });
            return result;
        });
        this.delete_onboarding = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield onboarding_model_1.OnBoardingInstance.destroy({
                where: {
                    OB_ID: parseInt(header.OB_ID)
                }
            });
            return result;
        });
        this.delete_Started = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield getstarted_model_1.GetStartedInstance.destroy({
                where: {
                    GS_ID: parseInt(header.GS_ID)
                }
            });
            return result;
        });
        this.delete_in_touch_home = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield getonboardhome_model_1.GetOnBoardHomeInstance.destroy({
                where: {
                    OBH_ID: parseInt(header.OBH_ID)
                }
            });
            return result;
        });
        this.get_registerUser = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query('SELECT  `ID` as id,`USERROLE`, `USERNAME`, `F_NAME`, `L_NAME`, `EMAIL`,  `ISDELETED`, `createdAt`, `updatedAt` FROM `tbl_user`', {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.get_blogs = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield blogs_model_1.BlogsInstance.findAll();
            return result;
        });
        this.delete_my_create_blog = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield blogs_model_1.BlogsInstance.destroy({
                where: {
                    BLOG_ID: parseInt(header.BLOG_ID)
                }
            });
            return result;
        });
        this.delete_subscribe = (header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield subscribe_model_1.SubscribeInstance.destroy({
                where: {
                    SB_ID: parseInt(header.SB_ID)
                }
            });
            return result;
        });
        this.notes_applied = (req, header) => {
            const dateTime = (0, moment_1.default)(new Date()).format("YYYY-MM-DD HH:mm:ss");
            const result = orderextense_model_1.OrderextenseInstance.update({
                SPECIAL_ID: req.SPECIAL_ID,
                NOTES_APPLIEDBY: header.sub,
                NOTES_APPLIEDON: new Date()
            }, {
                where: {
                    ORDER_ID: req.ORDER_ID,
                }
            });
            return result;
        };
        this.update_section1 = (body, files) => __awaiter(this, void 0, void 0, function* () {
            console.log(body);
            console.log(files);
            let images = null;
            if (files.IMAGE) {
                images = (0, imageupload_1.uploadimage)(files.IMAGE);
                const result = yield section1_model_1.Section1Instance.update({
                    IMAGE: images,
                    TITLE: body.TITLE,
                    CONTENT: body.CONTENT,
                    NAME: body.NAME,
                    ADDED_BY: 1,
                }, {
                    where: {
                        SE_ID: parseInt(body.SE_ID)
                    }
                });
                return result;
            }
            else {
                const result = yield section1_model_1.Section1Instance.update({
                    TITLE: body.TITLE,
                    CONTENT: body.CONTENT,
                    NAME: body.NAME,
                    ADDED_BY: 1,
                }, {
                    where: {
                        SE_ID: parseInt(body.SE_ID)
                    }
                });
                return result;
            }
        });
        this.update_section3 = (body) => __awaiter(this, void 0, void 0, function* () {
            const result = yield section3_model_1.Section3Instance.update({
                HEADING: body.HEADING,
                CONTENT: body.CONTENT,
                NAME: body.NAME,
                ADDED_BY: 1,
            }, {
                where: {
                    SE_ID: parseInt(body.SE_ID)
                }
            });
            return result;
        });
        this.update_section2 = (body) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Section2_model_1.Section2Instance.update({
                HEADING: body.HEADING,
                CONTENT: body.CONTENT,
                TITLE: body.TITLE,
                NAME: body.NAME,
                ADDED_BY: 1,
            }, {
                where: {
                    SE_ID: parseInt(body.SE_ID)
                }
            });
            return result;
        });
        this.complete_process = (req, header) => {
            const result = orderextense_model_1.OrderextenseInstance.update({
                COMPLETED_BY: header.sub,
                COMPLETION_DATE: new Date()
            }, {
                where: {
                    ORDER_ID: req.ORDER_ID,
                }
            });
            return result;
        };
        this.changeStatus = (status, ORDER_ID) => __awaiter(this, void 0, void 0, function* () {
            const result = yield order_model_1.OrderInstance.update({
                STATUS: status,
            }, {
                where: {
                    ORDER_ID: ORDER_ID,
                }
            });
            return result;
        });
        this.recently_applied = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield order_model_1.OrderInstance.findAll({
                order: [['createdAt', 'DESC']],
                limit: 6
            });
            return result;
        });
        this.latest_consent = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield orderextense_model_1.OrderextenseInstance.findAll({
                where: {
                    DOCUMENT_STATUS: true
                },
                order: [['updatedAt', 'DESC']],
                limit: 6
            });
            return result;
        });
        this.latest_user = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserInstance.findAll({
                order: [['createdAt', 'DESC']],
                limit: 6
            });
            return result;
        });
        this.ExtrasendMails = (req) => __awaiter(this, void 0, void 0, function* () {
            const nodemail = yield (0, sendMail_1.sendMail)(req.EMAIL, req.PERPOUS, req.EMAIL_BODY, "");
            return nodemail;
        });
        this.CreateMail = (req) => __awaiter(this, void 0, void 0, function* () {
            const nodemail = yield emaillog_model_1.EmailInstance.create({
                ORDER_ID: req.ORDER_ID,
                EMAIL_STATUS: true,
                PERPOUS: req.PERPOUS,
                EMAIL_BODY: req.EMAIL_BODY
            });
            return nodemail;
        });
    }
}
exports.AdminService = new AdminServiceClass();
//# sourceMappingURL=admin.service.js.map