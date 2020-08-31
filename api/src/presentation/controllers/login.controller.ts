import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { ILoginHandler } from '../../modules/login/handlers/login-handler.interface';
import { LoginHandler } from '../../modules/login/handlers/login.handler';

export class LoginController {
    private _loginHandler: ILoginHandler;

    constructor() {
        this._loginHandler = new LoginHandler();
    }

    async login(request: Request, response: Response) {
        try {
            const result = await this._loginHandler.handle(request.body)
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}