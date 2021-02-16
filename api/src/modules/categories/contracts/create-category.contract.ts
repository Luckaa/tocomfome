import { Notifiable } from '../../../infra/models/notifiable';
import { Validator } from '../../../infra/validator/validator';
import { CreateCategoryDto } from '../dtos/create-category.dto';


export class CreateCategoryContract extends Notifiable {
    private _dto: CreateCategoryDto;
    private _validator: Validator;

    constructor(createCategoryDto: CreateCategoryDto) {
        super();
        this._dto = createCategoryDto;
        this._validator = new Validator();
    }

    validate() {
        this._validator.isRequired(this._dto.name, 'name', 'name é obrigatorio');
        
        this.addReports(this._validator.reports);
        return this.isValid();
    }
}