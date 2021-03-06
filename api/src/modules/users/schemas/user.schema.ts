import { model, Schema } from 'mongoose';
import { UserType } from '../enums/user-type.enum';

const schema = new Schema(
    {
        type: {
            type: String,
            enum: [UserType.CLIENT, UserType.RESTAURANT]
        },
        name: String,
        email: String,
        password: String,
        category: String,
        ownerName: String,
        restaurantName: String,
        cnpj: String,
    },
    {
        timestamps: true,
    },
);


const UserModel = model('User', schema);
export default UserModel;