import { Result } from '../../../infra/models/result';
import { RegisterUserDto } from '../dtos/register-user.dto';

export interface IRegisterUserHandler {
    handle(RegisterRestaurantDto: RegisterUserDto): Promise<Result>;
}