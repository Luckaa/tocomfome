import { RegisterRestaurantDto } from '../dtos/register-restaurant.dto';
import { Notifiable } from '../../../infra/models/notifiable';
import { Validator } from '../../../infra/validator/validator';

export class RegisterRestaurantContract extends Notifiable {
    private _dto: RegisterRestaurantDto;
    private _validator: Validator;

    constructor(registerRestaurantDto: RegisterRestaurantDto) {
        super();
        this._dto = registerRestaurantDto;
        this._validator = new Validator();
    }

    validate() {
        this._validator.isRequired(this._dto.nomeDoProprietario, 'nome', 'o nome do proprietario é obrigatorio para o cadastro')   

        this._validator.isRequired(this._dto.nomeDoRestaurante, 'nome', 'o nome do restaurante é obrigatorio para o cadastro')  

        this._validator.isRequired(this._dto.cnpj, 'nome', 'o nome do proprietario é obrigatorio para o cadastro')   


        this._validator.isRequired(this._dto.email, 'email', 'email é obrigatorio');
        this._validator.isValidEmail(this._dto.email, 'email', 'email invalido');
        
        this._validator.isRequired(this._dto.password, 'password', 'password do é obrigatorio');
        this._validator.isLessThan(this._dto.password.length, 6, "password", "a senha não pode ter menos que 6 caracteres")

        this.addReports(this._validator.reports);
        return this.isValid();
    }
}