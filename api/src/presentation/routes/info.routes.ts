import { Router } from 'express';
import { InfoController } from '../controllers/info.controller';

export class InfoRoutes {
    private _router: Router;
    private _controller: InfoController;

    constructor() {
        this._router = Router();
        this._controller = new InfoController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.get('/', (req, res) => this._controller.info(req, res));
    }
}