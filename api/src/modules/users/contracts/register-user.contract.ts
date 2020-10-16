import { Notifiable } from '../../../infra/models/notifiable';
import { Validator } from '../../../infra/validator/validator';
import { RegisterUserDto } from '../dtos/register-user.dto';

export class RegisterUserContract extends Notifiable {
    private _dto: RegisterUserDto;
    private _validator: Validator;

    constructor(registerUserDto: RegisterUserDto) {
        super();
        this._dto = registerUserDto;
        this._validator = new Validator();
    }

    private validateRestaurant() {
        this._validator.isRequired(this._dto.nomeDoProprietario, 'nome', 'o nome do proprietario é obrigatorio para o cadastro')

        this._validator.isRequired(this._dto.nomeDoRestaurante, 'nome', 'o nome do restaurante é obrigatorio para o cadastro')

        this._validator.isRequired(this._dto.cnpj, 'nome', 'o nome do proprietario é obrigatorio para o cadastro')


        this._validator.isRequired(this._dto.email, 'email', 'email é obrigatorio');
        this._validator.isValidEmail(this._dto.email, 'email', 'email invalido');

        this._validator.isRequired(this._dto.password, 'password', 'password do é obrigatorio');
        this._validator.isLessThan(this._dto.password.length, 6, "password", "a senha não pode ter menos que 6 caracteres")
    }

    private validateClient() {
        this._validator.isRequired(this._dto.nome, 'nome', 'o nome é obrigatorio para o cadastro')

        this._validator.isRequired(this._dto.email, 'email', 'email é obrigatorio');
        this._validator.isValidEmail(this._dto.email, 'email', 'email invalido');

        this._validator.isRequired(this._dto.password, 'password', 'password do é obrigatorio');
        this._validator.isLessThan(this._dto.password.length, 6, "password", "a senha não pode ter menos que 6 caracteres")
    }
}
