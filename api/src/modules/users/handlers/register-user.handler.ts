import { ValidationFailedError } from '../../../infra/errors/validationFailedError';
import { Result } from '../../../infra/models/result';
import { IEncriptService } from '../../shared/services/encript-service.interface';
import { EncriptService } from '../../shared/services/encript.service';
import { RegisterUserContract } from '../contracts/register-user.contract';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { User } from '../models/user';
import { UserRepository } from '../repositories/user.repository';
import { IUserRepository } from '../repositories/user.repository.interface';
import { IRegisterUserHandler } from './register-user-handler.interface';

export class RegisterUserHandler implements IRegisterUserHandler {

    private _repository: IUserRepository;
    private _encriptService: IEncriptService;

    constructor() {
        this._repository = new UserRepository();
        this._encriptService = new EncriptService();
    }

    async handle(registerUserDto: RegisterUserDto): Promise<Result> {
        this.validate(registerUserDto);
        await this.validadeUseCases(registerUserDto);

        const { files } = registerUserDto;

        if (files) {
            const [firstfile] = files;            
            // upload to service and get link image
        }

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

        if (userFound) {
            throw new ValidationFailedError('falha ao cadastrar usuario', { name: 'email', message: 'email ja cadastrado' });
        }
    }

    private async saveUser(registerUserDto: RegisterUserDto) {

        const encriptedPassword = await this._encriptService.encript(registerUserDto.password);

        const newUser = {
            ...registerUserDto,
            password: encriptedPassword,
        } as User;

        const userCreated = await this._repository.create(newUser);
        return userCreated;
    }
}
