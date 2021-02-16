import { Result } from "../../../infra/models/result";
import { ICategoryRepository } from '../repositories/category-repository.interface';
import { CategoryRepository } from '../repositories/category.repository';
import { IFindCategoriesHandler } from './find-categories-handler.interface';

export class FindCategoriesHandler implements IFindCategoriesHandler {

  private _repository: ICategoryRepository;

  constructor() {
    this._repository = new CategoryRepository();
  }

  async handle(): Promise<Result> {
    const foods = await this._repository.findAll();
    const messageReturn = "success on list categories";
    return new Result(foods, messageReturn, true, []);
  }
}
