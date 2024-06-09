import { User } from "./user.model";

export class Customer {
    cid?: number;
    name?: string;
    email?: string;
    contactNumber?: number;
    user? : User;
    address?: string;
    password?: string;
    userName?: string

    constructor(){}
    
}
