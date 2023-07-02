export interface creatuserinf {
    USERID: string;
    USERROLE: number;
    NAME: string;
    EMAIL: String;
    PASSWORD: String;
}


export interface UserAttributes {
    ID?: number;
    USERROLE: number;
    USERNAME: string;
    EMAIL: string;
    PASSWORD: string;
    EMAILSTATUS: boolean;
    ISDELETED: boolean;
}

export interface jwttoken {
    sub: number,
    role: number,
    iat: any,
    exp: any,
}
export interface resetinterface {
    RESET_ID?: number;
    EMAIL: any;
    RESET_OTP: string;
}


export interface ImageRequest extends Request {
    files: any;
}