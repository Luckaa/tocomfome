import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { IRegisterUserHandler } from '../../modules/users/handlers/register-user-handler.interface';
import { RegisterUserHandler } from '../../modules/users/handlers/register-user.handler';

export class UsersController {
    private _registerRestaurantHandler: IRegisterUserHandler;

    constructor() {
        this._registerRestaurantHandler = new RegisterUserHandler();
    }

    async registerUser(request: Request, response: Response) {
        try {

            const createUserDto = {
                ...request.body,
                files: request.files
            }

            const result = await this._registerRestaurantHandler.handle(createUserDto)
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}