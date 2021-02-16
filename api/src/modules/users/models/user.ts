import { UserType } from '../enums/user-type.enum';

export interface User {
    _id: string;
    type: UserType;
    name: string;
    email: string;
    password: string;
    validatePassword:string,
    ownerName: string;
    restaurantName:string;
    cnpj:string;
}