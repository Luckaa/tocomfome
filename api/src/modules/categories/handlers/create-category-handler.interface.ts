import { Result } from '../../../infra/models/result';
import { CreateCategoryDto } from '../dtos/create-category.dto';

export interface ICreateCategoryHandler {
    handle(createCategoryDto: CreateCategoryDto): Promise<Result>;
}