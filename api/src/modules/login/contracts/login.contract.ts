import { LoginDto } from '../dtos/login.dto';
import { Notifiable } from '../../../infra/models/notifiable';
import { Validator } from '../../../infra/validator/validator';

export class LoginContract extends Notifiable {
    private _dto: LoginDto;
    private _validator: Validator;

    constructor(loginDto: LoginDto) {
        super();
        this._dto = loginDto;
        this._validator = new Validator();
    }

    validate() {
        this._validator.isRequired(this._dto.email, 'email', 'email é obrigatorio');
        this._validator.isValidEmail(this._dto.email, 'email', 'email invalido');
        
        this._validator.isRequired(this._dto.password, 'password', 'password é obrigatorio');
        this._validator.isLessThan(this._dto.password?.length, 6, "password", "a senha não pode ter menos que 6 caracteres")

        this.addReports(this._validator.reports);
        return this.isValid();
    }
}