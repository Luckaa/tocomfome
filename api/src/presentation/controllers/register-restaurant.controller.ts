import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { IRegisterRestaurantHandler } from '../../modules/register-restaurant/handlers/register-restaurant-handler.interface';
import { RegisterRestaurantHandler } from '../../modules/register-restaurant/handlers/register-restaurant.handler';

export class RegisterRestaurantController {
    private _registerRestaurantHandler: IRegisterRestaurantHandler;

    constructor() {
        this._registerRestaurantHandler = new RegisterRestaurantHandler();
    }

    async registerRestaurant(request: Request, response: Response) {
        try {
            const result = await this._registerRestaurantHandler.handle(request.body)
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}