import { UserType } from '../enums/user-type.enum';
export interface RegisterUserDto {
    type: UserType;
    name: string;
    email: string;
    password: string;
    validatePassword: string,
    ownerName: string;
    restaurantName: string;
    cnpj: string;
    files?: Express.Multer.File[]
}