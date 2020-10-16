import { UserType } from '../enums/user-type.enum';
export interface RegisterUserDto {
    type: UserType;
    nome: string;
    email: string;
    password: string;
    nomeDoProprietario: string;
    nomeDoRestaurante:string;
    cnpj:string;
}