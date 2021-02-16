import { ValidationFailedError } from '../../../infra/errors/validationFailedError';
import { Result } from "../../../infra/models/result";
import { CreateCategoryContract } from '../contracts/create-category.contract';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { Category } from '../models/category';
import { ICategoryRepository } from '../repositories/category-repository.interface';
import { CategoryRepository } from '../repositories/category.repository';
import { ICreateCategoryHandler } from './create-category-handler.interface';

export class CreateCategoryHandler implements ICreateCategoryHandler {

  private _repository: ICategoryRepository;

  constructor() {
    this._repository = new CategoryRepository();
  }

  async handle(createCategoryDto: CreateCategoryDto): Promise<Result> {
    this.validate(createCategoryDto);

    const newCategory = {
      ...createCategoryDto
    } as Category;

    const categoryCreated = await this._repository.create(newCategory);
    
    const messageReturn = "success on create category";
    return new Result(categoryCreated, messageReturn, true, []);
  }

  private validate(createCategoryDto: CreateCategoryDto) {
    const contract = new CreateCategoryContract(createCategoryDto);
    const isValid = contract.validate();

    if (!isValid) {
      throw new ValidationFailedError('failed on create category', ...contract.reports);
    }
  }
}
