import { Result } from '../../../infra/models/result';
import { LoginDto } from '../dtos/login.dto';
import { ILoginHandler } from './login-handler.interface';
import { LoginContract } from '../contracts/login.contract';
import { ValidationFailedError } from '../../../infra/errors/validationFailedError';
import { IUserRepository } from '../../users/repositories/user.repository.interface';
import { UserRepository } from '../../users/repositories/user.repository';
import { IAuthService } from '../../shared/services/auth-service.interface';
import { AuthService } from '../../shared/services/auth.service';
import { IEncriptService } from '../../shared/services/encript-service.interface';
import { EncriptService } from '../../shared/services/encript.service';

export class LoginHandler implements ILoginHandler {

    private _repository: IUserRepository;
    private _authService: IAuthService;    
    private _encriptService: IEncriptService;

    constructor() {
        this._repository = new UserRepository();
        this._authService = new AuthService();
        this._encriptService = new EncriptService();
0    }

    async handle(loginDto: LoginDto): Promise<Result> {
        this.validate(loginDto);
        const token = await this.login(loginDto);
        return new Result({ token }, 'login funcionando', true, []);
    }

    private validate(loginDto: LoginDto) {
        const contract = new LoginContract(loginDto);
        const isValid = contract.validate();

        if (!isValid) {
            throw new ValidationFailedError('nao deu pra logar', ...contract.reports);
        }
    }

    private async login(loginDto: LoginDto) {
        const encriptedPassword = await this._encriptService.encript(loginDto.password);

        const userFound = await this._repository.findByEmailAndPassword(loginDto.email, encriptedPassword);
        if (!userFound) {
            throw new ValidationFailedError('nao foi possivel realizar o login', { name: 'login', message: 'email ou senha incorretos' });
        }

        const tokenGenerated = await this._authService.generateToken(userFound);
        return tokenGenerated;
    }

}