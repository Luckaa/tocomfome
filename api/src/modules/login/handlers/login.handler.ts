import { Result } from '../../../infra/models/result';
import { LoginDto } from '../dtos/login.dto';
import { ILoginHandler } from './login-handler.interface';
import { LoginContract } from '../contracts/login.contract';
import { ValidationFailedError } from '../../../infra/errors/validationFailedError';

export class LoginHandler implements ILoginHandler {

    async handle(loginDto: LoginDto): Promise<Result> {
        const reports = this.validate(loginDto);
        return new Result(null, 'login funcionando', true, []);
    }

    private validate(loginDto: LoginDto) {
        const contract = new LoginContract(loginDto);
        const isValid = contract.validate();

        if (!isValid) {
            throw new ValidationFailedError('nao deu pra logar', ...contract.reports);
        }
    }
}