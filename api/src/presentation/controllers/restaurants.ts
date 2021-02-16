import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { BuscarRestaurantHandler } from '../../modules/restaurant/handlers/buscar-restaurant-handler';
import { IBuscarRestaurantHandler } from '../../modules/restaurant/handlers/buscar-restaurant-handler.interface';

export class BuscarRestaurantController {
    private _BuscarRestaurantHandler: IBuscarRestaurantHandler;

    constructor() {
        this._BuscarRestaurantHandler = new BuscarRestaurantHandler();
    }

    async findRestaurants(request: Request, response: Response) {
        try {
            const result = await this._BuscarRestaurantHandler.handle();
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}