import internal from "assert";


export interface RegisterFormParams {
    firstName: string;
    lastName: string;
    password: string;
    confPassword: string;
    address: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    pin: string;
    userType: string;
    
}

export interface FromSelectArray{
    label: string;
    value: string;
}

export interface SuccessMsgRegister{
    successMsg: String;
}