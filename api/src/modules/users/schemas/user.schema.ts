import { Schema, model, Types } from 'mongoose';
import { UserType } from '../enums/user-type.enum';

const schema = new Schema(
    {
        type: {
            type: String,
            enum: [UserType.CLIENT, UserType.RESTAURANT]
        },
        nome: String,
        email: String,
        password: String,
        category: String,
        nomeDoProprietario: String,
        nomeDoRestaurante: String,
        cnpj: String,
    },
    {
        timestamps: true,
    },
);


const UserModel = model('User', schema);
export default UserModel;