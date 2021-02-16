import { Notifiable } from '../../../infra/models/notifiable';
import { Validator } from '../../../infra/validator/validator';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserType } from '../enums/user-type.enum';

export class RegisterUserContract extends Notifiable {
    private _dto: RegisterUserDto;
    private _validator: Validator;

    constructor(registerUserDto: RegisterUserDto) {
        super();
        this._dto = registerUserDto;
        this._validator = new Validator();
    }

    public validate(): boolean {

        this.validateCommonFields();

        if (this._dto.type == UserType.CLIENT) {
            this.validateClient();
        }

        if (this._dto.type == UserType.RESTAURANT) {
            this.validateRestaurant();
        }


        this.addReports(this._validator.reports);
        return this.isValid();
    }

    private validateCommonFields() {
        this._validator.isRequired(this._dto.type, 'type', 'type é obrigatorio');
        this._validator.isRequired(this._dto.email, 'email', 'email é obrigatorio');
        this._validator.isValidEmail(this._dto.email, 'email', 'email invalido');
        this._validator.isRequired(this._dto.password, 'password', 'password do é obrigatorio');

        if (this._dto.password) {
            this._validator.isLessThan(this._dto.password.length, 6, "password", "a senha não pode ter menos que 6 caracteres");
        }

        if(this._dto.password != this._dto.validatePassword){
            this.addReport({name:"password" , message:"as senhas não coincidem"})
        }

        const isNotValidUserType = !Object.values(UserType).some((v) => v === this._dto.type);
        if (isNotValidUserType) {
            this.addReport({ name: 'type', message: 'type invalido' });
        }
    }
    

    private validateRestaurant() {
        this._validator.isRequired(this._dto.ownerName, 'ownerName', 'o nome do proprietario é obrigatorio para o cadastro');
        this._validator.isRequired(this._dto.restaurantName, 'restaurantName', 'o nome do restaurante é obrigatorio para o cadastro');
        this._validator.isRequired(this._dto.cnpj, 'cnpj', 'o cnpj do proprietario é obrigatorio para o cadastro')
    }
    

    private validateClient() {
        this._validator.isRequired(this._dto.name, 'name', 'o nome é obrigatorio para o cadastro');
    }
}
