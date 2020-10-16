import { Result } from '../../../infra/models/result';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { IRegisterUserHandler } from './register-user-handler.interface';

export class RegisterUserHandler implements IRegisterUserHandler {

    handle(RegisterRestaurantDto: RegisterUserDto): Promise<Result> {
        throw new Error('Method not implemented.');
    }

}