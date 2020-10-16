import { User } from '../models/user';

export interface IUserRepository {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByEmailAndPassword(email: string, password: string): Promise<User>;
}