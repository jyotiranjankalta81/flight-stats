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
  getFlightDetails = catchAsync(async (req: Request, res: Response) => {
    try {
      const insertcollection = await mainService.getFlightDetails(req);
      return res.status(httpStatus.CREATED).send({
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
}

export const MainController = new MainControllerClass();
