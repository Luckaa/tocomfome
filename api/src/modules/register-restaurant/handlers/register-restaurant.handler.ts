import { Result } from '../../../infra/models/result';
import { RegisterRestaurantDto } from '../dtos/register-restaurant.dto';
import { IRegisterRestaurantHandler } from './register-restaurant-handler.interface';
import { RegisterRestaurantContract } from '../contracts/register-restaurant.contract';
import { ValidationFailedError } from '../../../infra/errors/validationFailedError';

export class RegisterRestaurantHandler implements IRegisterRestaurantHandler {

    async handle(registerRestaurantDto: RegisterRestaurantDto): Promise<Result> {
        const reports = this.validate(registerRestaurantDto);
        return new Result(registerRestaurantDto, 'registrado com sucesso', true, []);
    }

    private validate(registerRestaurantDto: RegisterRestaurantDto) {
        const contract = new RegisterRestaurantContract(registerRestaurantDto);
        const isValid = contract.validate();

        if (!isValid) {
            throw new ValidationFailedError('não deu pra cadastrar...', ...contract.reports);
        }
    }
}