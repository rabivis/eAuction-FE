export interface LoginFormParams {
    userName: string;
    userPass: string;
}

export interface CurrentUser {
    user: User;
    token: string;
}

export interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    phone: string;
    password: string;
    pin: string;
    userType: number;
}