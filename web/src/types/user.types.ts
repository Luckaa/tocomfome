export enum UserType {
    CLIENT = 'client',
    RESTAURANT = 'restaurant'
}
export type RegisterUserDto = {
    type: UserType;
    name: string;
    email: string;
    password: string;
    ownerName: string;
    restaurantName:string;
    cnpj:string;
}