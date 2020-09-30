import { Result } from '../../../infra/models/result';
import { RegisterClientDto } from '../dtos/register-client.dto';
import { IRegisterClientHandler } from './register-client-handler.interface';
import { RegisterClientContract } from '../contracts/register-client.contract';
import { ValidationFailedError } from '../../../infra/errors/validationFailedError';

export class RegisterClientHandler implements IRegisterClientHandler {

    async handle(registerClientDto: RegisterClientDto): Promise<Result> {
        const reports = this.validate(registerClientDto);
        return new Result(registerClientDto, 'registrado com sucesso', true, []);
    }

    private validate(registerClientDto: RegisterClientDto) {
        const contract = new RegisterClientContract(registerClientDto);
        const isValid = contract.validate();

        if (!isValid) {
            throw new ValidationFailedError('não deu pra cadastrar...', ...contract.reports);
        }
    }
}