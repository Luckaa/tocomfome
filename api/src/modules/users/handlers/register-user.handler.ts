import { Result } from '../../../infra/models/result';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { IRegisterUserHandler } from './register-user-handler.interface';
import { RegisterUserContract } from '../contracts/register-user.contract';
import { ValidationFailedError } from '../../../infra/errors/validationFailedError';
import { IUserRepository } from '../repositories/user.repository.interface';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user';

export class RegisterUserHandler implements IRegisterUserHandler {

    private _repository: IUserRepository;

    constructor() {
        this._repository = new UserRepository();
    }

    async handle(registerUserDto: RegisterUserDto): Promise<Result> {
        this.validate(registerUserDto);
        await this.validadeUseCases(registerUserDto);
        const userCreated = await this.saveUser(registerUserDto);
        const resultSuccess = new Result(userCreated, 'usuario criado com sucesso', true, []);
        return resultSuccess;
    }

    private validate(registerUserDto: RegisterUserDto) {
        const contract = new RegisterUserContract(registerUserDto);
        const isValid = contract.validate();

        if (!isValid) {
            throw new ValidationFailedError('falha ao cadastrar usuario', ...contract.reports);
        }
    }

    private async validadeUseCases(registerUserDto: RegisterUserDto) {
        const userFound = await this._repository.findByEmail(registerUserDto.email);
        console.log(userFound);
        
        if (userFound) {
            throw new ValidationFailedError('falha ao cadastrar usuario', { name: 'email', message: 'email ja cadastrado' });
        }
    }

    private async saveUser(registerUserDto: RegisterUserDto) {
        const newUser = {
            ...registerUserDto
        } as User;

        const userCreated = await this._repository.create(newUser);
        return userCreated;
    }
}
