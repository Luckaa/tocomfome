import { User } from '../models/user';
import { IUserRepository } from './user.repository.interface';
import UserModel from '../schemas/user.schema';

export class UserRepository implements IUserRepository {
    async create(user: User): Promise<User> {
        const documentUserCreated = await UserModel.create(user);
        const userCreated = documentUserCreated.toObject();
        return userCreated;
    }

    async findByEmail(email: string): Promise<User> {
        const documentUserFound = await UserModel.findOne({email});
        const userFound = documentUserFound?.toObject()
        return userFound;
    }

}