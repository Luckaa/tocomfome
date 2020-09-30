import { RegisterClientDto } from '../dtos/register-client.dto';
import { Notifiable } from '../../../infra/models/notifiable';
import { Validator } from '../../../infra/validator/validator';

export class RegisterClientContract extends Notifiable {
    private _dto: RegisterClientDto;
    private _validator: Validator;

    constructor(registerClientDto: RegisterClientDto) {
        super();
        this._dto = registerClientDto;
        this._validator = new Validator();
    }

    validate() {
        this._validator.isRequired(this._dto.nome, 'nome', 'o nome é obrigatorio para o cadastro')    

        this._validator.isRequired(this._dto.email, 'email', 'email é obrigatorio');
        this._validator.isValidEmail(this._dto.email, 'email', 'email invalido');
        
        this._validator.isRequired(this._dto.password, 'password', 'password do é obrigatorio');
        this._validator.isLessThan(this._dto.password.length, 6, "password", "a senha não pode ter menos que 6 caracteres")

        this.addReports(this._validator.reports);
        return this.isValid();
    }
}