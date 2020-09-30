import { Result } from '../../../infra/models/result';
import { RegisterRestaurantDto } from '../dtos/register-restaurant.dto';

export interface IRegisterRestaurantHandler {
    handle(RegisterRestaurantDto: RegisterRestaurantDto): Promise<Result>;
}