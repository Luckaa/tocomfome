import { Request, Response } from 'express';
import { HttpStatus } from '../../infra/enums/http-status.enum';
import { HandleResponse } from '../../infra/helper/handleResponse';
import { IInfoHandler } from '../../modules/info/handlers/info-handler.interface';
import { InfoHandler } from '../../modules/info/handlers/info-handler';

export class InfoController {
    private _infoHandler: IInfoHandler;

    constructor() {
        this._infoHandler = new InfoHandler();
    }

    async info(request: Request, response: Response) {
        try {
            const result = await this._infoHandler.handle()
            return HandleResponse.handle(response, HttpStatus.SUCCESS, result);
        } catch (error) {
            return HandleResponse.handleError(response, HttpStatus.BAD_REQUEST, error);
        }
    }
}