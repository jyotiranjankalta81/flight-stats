import { Request, Response } from "express";
import httpStatus from "http-status";
import { mainService } from "../service/main.service";
import { catchAsync } from "../utils/catchAsync";
import { generateAuthTokens } from "../utils/tokens";
import jwt_decode from "jwt-decode";
const stripe = require("stripe")(
  "sk_test_51L2wFuSIakMfogRlbY0t1gPUKf7bbZyMkEdWELrX98T6LsBPeOV2Y0R4BkEDWBo7v4sCJ98x5aQBjtqPjsCk7FB400v9cTQOMM"
);

class MainControllerClass {
  create_contactus = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.create_contactus(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });
  get_started = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.get_started(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  getFlightDetails = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.getFlightDetails(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  get_Started = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.get_Started(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  subscribe = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body);
    try {
      const insertcollection = await mainService.subscribe(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });
  get_subscribe = catchAsync(async (req: Request, res: Response) => {
    try {
      const blog = await mainService.get_subscribe(req.body);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Message send successfully",
          data: blog,
        });
    } catch (error) {
      console.log(error);
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });
  get_in_touch = catchAsync(async (req: Request, res: Response) => {
    try {
      const blog = await mainService.get_in_touch(req.body, req.files);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Message send successfully",
          data: blog,
        });
    } catch (error) {
      console.log(error);
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  create_patner = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.create_patner(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });
  get_onboard_home = catchAsync(async (req: Request, res: Response) => {
    try {
      const getdata = await mainService.get_onboard_home(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: getdata,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  check_status = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.check_status(req);
      return res
        .status(httpStatus.CREATED)
        .send({
          success: true,
          message: "Your Form has subbmitted successfully",
          data: insertcollection,
        });
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  create_order = catchAsync(async (req: Request, res: Response) => {
    const reqheader: any = req.header("authorization");
    const header: any = jwt_decode(reqheader);
    try {
      const order1: any = await mainService.create_order(req, header);
      if (order1) {
        const order2 = await mainService.create_order_extense(req, order1);
        if (order2) {
          const sendmail: any = await mainService.send_mail(req, order2);
          if (sendmail?.status) {
            const processlog = await mainService.CreateProcessLog({
              ORDER_ID: order1.ORDER_ID,
              PROCESS_STATUS: true,
              PERPOUS: "Form Applied and Consent email send successfully",
            });
            if (processlog) {
              return res
                .status(httpStatus.CREATED)
                .send({
                  success: true,
                  message: "Your Form has subbmitted successfully",
                  data: order1,
                });
            }
          }
        }
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  uploadConstant = catchAsync(async (req: Request, res: Response) => {
    try {
      const files: any = req?.files;
      const constantfile = await mainService.uploadConstant(
        req.body.ORDER_ID,
        files
      );
      if (constantfile) {
        const getorderid = await mainService.getOrdereId(req.body.ORDER_ID);
        if (getorderid) {
          const getemail = await mainService.getemailbyorder(
            getorderid?.ORDER_ID
          );
          if (getemail) {
            const sendmail: any = await mainService.UploadConsentEmail(
              getemail?.EMAIL,
              req.body.ORDER_ID
            );
            if (sendmail) {
              const processlog = await mainService.CreateProcessLog({
                ORDER_ID: getorderid?.ORDER_ID,
                PROCESS_STATUS: true,
                PERPOUS: "upload Constant",
              });
              if (processlog) {
                return res
                  .status(httpStatus.CREATED)
                  .send({
                    success: true,
                    message: "Your consent is uploaded successfully",
                    data: constantfile,
                  });
              }
            }
          }
        }
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });

  genrateintent = catchAsync(async (req: Request, res: Response) => {
    try {
      const {
        email,
        appointmentPrice,
        description,
        customer_description,
        user_id,
      } = req.body;

      try {
        const customer = await stripe.customers.create({
          email: email,
        });
        const ephemeralKey = await stripe.ephemeralKeys.create(
          { customer: customer.id },
          { apiVersion: "2022-08-01" }
        );
        const paymentinstance = await stripe.paymentIntents.create({
          amount: parseInt(appointmentPrice) * 100,
          currency: "USD",
          payment_method_types: ["card"],
          description: description,
          receipt_email: email,
          customer: customer.id,
          metadata: {
            customer_email: email,
            customer_description: customer_description,
            user_id: user_id,
          },
        });

        res.json({
          message: "payment initiated",
          paymentinstance,
          clientSeceret: paymentinstance.client_secret,
          ephemeralKey: ephemeralKey.secret,
          customer: customer.id,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal Srver Error" });
      }
    } catch (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ success: false, message: "Somthing went wrong!", data: error });
    }
  });
}

export const MainController = new MainControllerClass();
