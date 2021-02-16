import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { CreateCategoryHandler } from '../../modules/categories/handlers/create-category-handler';
import { ICreateCategoryHandler } from '../../modules/categories/handlers/create-category-handler.interface';
import { FindCategoriesHandler } from '../../modules/categories/handlers/find-categories-handler';
import { IFindCategoriesHandler } from '../../modules/categories/handlers/find-categories-handler.interface';


export class CategoriesController {
    private _findCategoriesHandler: IFindCategoriesHandler;
    private _createCategoryHandler: ICreateCategoryHandler;

    constructor() {
        this._findCategoriesHandler = new FindCategoriesHandler();
        this._createCategoryHandler = new CreateCategoryHandler();
    }

    async findCategories(request: Request, response: Response) {
        try {
            const result = await this._findCategoriesHandler.handle();
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
    
    async createCategory(request: Request, response: Response) {
        try {
            const result = await this._createCategoryHandler.handle(request.body);
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}