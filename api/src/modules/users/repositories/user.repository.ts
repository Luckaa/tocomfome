import { UserType } from '../enums/user-type.enum';
import { User } from '../models/user';
import UserModel from '../schemas/user.schema';
import { IUserRepository } from './user.repository.interface';

export class UserRepository implements IUserRepository {


    async create(user: User): Promise<User> {
        const documentUserCreated = await UserModel.create(user);
        const userCreated = documentUserCreated.toObject();
        return userCreated;
    }

    async findByEmail(email: string): Promise<User> {
        const documentUserFound = await UserModel.findOne({ email });
        const userFound = documentUserFound?.toObject()
        return userFound;
    }

    async findByEmailAndPassword(email: string, password: string): Promise<User> {
        const documentUserFound = await UserModel.findOne({ email, password });
        const userFound = documentUserFound?.toObject();
        return userFound;
    }

    async findByType(type: UserType): Promise<User[]> {
        const usersFound = await UserModel.find({ type }, {password: false});
        const mappUsersFound = usersFound?.map(user => user.toObject());
        return mappUsersFound;
    }

}