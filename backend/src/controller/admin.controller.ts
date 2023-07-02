import { Request, Response } from "express";
import httpStatus from "http-status";
import { mainService } from "../service/main.service";
import { catchAsync } from "../utils/catchAsync";
import { generateAuthTokens } from "../utils/tokens";
import jwt_decode from "jwt-decode";
import { AdminService } from "../service/admin.service";



class AdminControllerClass {

    AllGetOrder = catchAsync(async (req: Request, res: Response) => {
        try {
            const orders = await AdminService.AllGetOrder();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: orders });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    });

    GetAllUser = catchAsync(async (req: Request, res: Response) => {
        try {
            const orders = await AdminService.GetAllUser();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: orders });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    });


    get_contactus = catchAsync(async (req: Request, res: Response) => {
        try {
            const contacts = await AdminService.get_contactus();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: contacts });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    get_in_touch_home = catchAsync(async (req: Request, res: Response) => {
        try {
            const contacts = await AdminService.get_in_touch_home();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: contacts });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    get_onboarding = catchAsync(async (req: Request, res: Response) => {
        try {
            const contacts = await AdminService.get_onboarding();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: contacts });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    get_partnerus = catchAsync(async (req: Request, res: Response) => {
        try {
            const partners = await AdminService.get_partnerus();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: partners });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    Extra_requests = catchAsync(async (req: Request, res: Response) => {
        try {
            const ExtrasendMails = await AdminService.ExtrasendMails(req.body);
            if (ExtrasendMails) {
                const storemail = await AdminService.CreateMail(req.body);
                if (storemail) {
                    const changestatus = await AdminService.changeStatus(req.body.STATUS, req.body.ORDER_ID);
                    if (changestatus) {
                        const processlog = await mainService.CreateProcessLog({
                            ORDER_ID: req.body.ORDER_ID,
                            PROCESS_STATUS: true,
                            PERPOUS: req.body.STATUS + "Process request",
                        });
                        if (processlog) {
                            return res.status(httpStatus.CREATED).send({ success: true, message: "Process completed successfully", data: processlog });
                        }
                    }
                }
            }

        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );


    Process_log = catchAsync(async (req: Request, res: Response) => {
        try {
            const partners = await AdminService.Process_log(req);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: partners });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    awaiting_consent = catchAsync(async (req: Request, res: Response) => {

        try {
            const consentcheck: Array<any> = await AdminService.awaiting_consent();
            consentcheck.forEach(async (resnew: any) => {
                const sendmail: any = await AdminService.consentAwait_mail(resnew);
                if (sendmail.status) {
                    const processlog = await mainService.CreateProcessLog({
                        ORDER_ID: resnew.ORDER_ID,
                        PROCESS_STATUS: true,
                        PERPOUS: "send mail For Awaiting Consent",
                    });
                }

            });
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: [] });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    create_blog = catchAsync(async (req: Request, res: Response) => {
        console.log(req.body);
        console.log(req.files);
        try {
            const blog = await AdminService.create_blog(req.body, req.files);
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
        } catch (error) {
            console.log(error);
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    section1 = catchAsync(async (req: Request, res: Response) => {
        try {
            const section1 = await AdminService.section1(req.body, req.files);
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: section1 });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    customer_reviews = catchAsync(async (req: Request, res: Response) => {
        try {
            const customer_reviews = await AdminService.customer_reviews(req.body, req.files);
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: customer_reviews });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    get_customer_reviews = catchAsync(async (req: Request, res: Response) => {
        try {
            const customer_reviews = await AdminService.get_customer_reviews();
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: customer_reviews });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }


    }
    );
    delete_customer_reviews = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const customer_reviews = await AdminService.delete_customer_reviews(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: customer_reviews });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    get_section1 = catchAsync(async (req: Request, res: Response) => {
        try {
            const section1 = await AdminService.get_section1();
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: section1 });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    section2 = catchAsync(async (req: Request, res: Response) => {
        try {
            const section2 = await AdminService.section2(req.body);
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: section2 });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    get_section2 = catchAsync(async (req: Request, res: Response) => {
        try {
            const section2 = await AdminService.get_section2();
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: section2 });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    get_section3 = catchAsync(async (req: Request, res: Response) => {
        try {
            const section3 = await AdminService.get_section3();
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: section3 });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
            

    section3 = catchAsync(async (req: Request, res: Response) => {
        try {
            const section3 = await AdminService.section3(req.body);
            return res.status(httpStatus.CREATED).send({ success: true, message: "created successsfuly successfully", data: section3 });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    



    dashboard_details = catchAsync(async (req: Request, res: Response) => {
        try {
            const RecentlyApplied = await AdminService.recently_applied();
            if (RecentlyApplied) {
                const latest_consent = await AdminService.latest_consent();
                if (latest_consent) {
                    const latest_user = await AdminService.latest_user();
                    if (latest_user) {
                        return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", RecentlyApplied: RecentlyApplied, latest_consent: latest_consent, latest_user: latest_user });
                    }
                }
            }
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    my_create_blog = catchAsync(async (req: Request, res: Response) => {

        const reqheader: any = req.header("authorization");
        const header: any = jwt_decode(reqheader)
        // console.log(header)
        // return false;
        try {
            const blog = await AdminService.my_create_blog(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );




    delete_contact = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_contact(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Contact deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_onboarding = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_onboarding(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Onboarding deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_Started = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_Started(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Started deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_in_touch_home = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_in_touch_home(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "In touch home deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );




    get_registerUser = catchAsync(async (req: Request, res: Response) => {
        try {
            const blog = await AdminService.get_registerUser();
            return res.status(httpStatus.CREATED).send({ success: true, message: "", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    get_blogs = catchAsync(async (req: Request, res: Response) => {
        try {
            const blog = await AdminService.get_blogs();
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_my_create_blog = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_my_create_blog(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_subscribe = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        console.log(header)
        try {
            const blog = await AdminService.delete_subscribe(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Subscribe deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    notes_applied = catchAsync(async (req: Request, res: Response) => {
        const reqheader: any = req.header("authorization");
        const header: any = jwt_decode(reqheader)
        try {
            const notesapplied = await AdminService.notes_applied(req.body, header);
            if (notesapplied) {
                const changestatus = await AdminService.changeStatus(2000, req.body.ORDER_ID);
                if (changestatus) {
                    const processlog = await mainService.CreateProcessLog({
                        ORDER_ID: req.body.ORDER_ID,
                        PROCESS_STATUS: true,
                        PERPOUS: "Notes Applied",
                    });
                    if (processlog) {
                        return res.status(httpStatus.CREATED).send({ success: true, message: "Notes Applied successfully", data: notesapplied });
                    }
                }
            }
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    update_section1 = catchAsync(async (req: Request, res: Response) => {
        // console.log(req.body)
        
        
        try {
            const blog = await AdminService.update_section1(req.body,req.files);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Section1 updated successfully", data: blog });  
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_section1 = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_section1(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Section1 deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    update_section3 = catchAsync(async (req: Request, res: Response) => {
        
        try {
            const blog = await AdminService.update_section3(req.body);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Section3 updated successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    update_section2 = catchAsync(async (req: Request, res: Response) => {
        console.log(req.body)
        try {
            const blog = await AdminService.update_section2(req.body);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Section2 updated successfully", data: blog });

        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }

    );







    complete_process = catchAsync(async (req: Request, res: Response) => {
        const reqheader: any = req.header("authorization");
        const header: any = jwt_decode(reqheader)
        try {
            const notesapplied = await AdminService.complete_process(req.body, header);
            if (notesapplied) {
                const changestatus = await AdminService.changeStatus(5000, req.body.ORDER_ID);
                if (changestatus) {
                    const processlog = await mainService.CreateProcessLog({
                        ORDER_ID: req.body.ORDER_ID,
                        PROCESS_STATUS: true,
                        PERPOUS: "Process completed",
                    });
                    if (processlog) {
                        return res.status(httpStatus.CREATED).send({ success: true, message: "Process completed successfully", data: notesapplied });
                    }
                }
            }
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );








}




export const AdminController = new AdminControllerClass();