import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { IRegisterClientHandler } from '../../modules/register-client/handlers/register-client-handler.interface';
import { RegisterClientHandler } from '../../modules/register-client/handlers/register-client.handler';

export class RegisterClientController {
    private _registerClientHandler: IRegisterClientHandler;

    constructor() {
        this._registerClientHandler = new RegisterClientHandler();
    }

    async registerClient(request: Request, response: Response) {
        try {
            const result = await this._registerClientHandler.handle(request.body)
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}