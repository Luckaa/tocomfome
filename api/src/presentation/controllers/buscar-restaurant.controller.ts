import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { IBuscarRestaurantHandler } from '../../modules/buscar-restaurant/handlers/buscar-restaurant-handler.interface';
import { BuscarRestaurantHandler } from '../../modules/buscar-restaurant/handlers/buscar-restaurant-handler';

export class BuscarRestaurantController {
    private _BuscarRestaurantHandler: IBuscarRestaurantHandler;

    constructor() {
        this._BuscarRestaurantHandler = new BuscarRestaurantHandler();
    }

    async restaurants(request: Request, response: Response) {
        try {
            const result = await this._BuscarRestaurantHandler.handle()
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}