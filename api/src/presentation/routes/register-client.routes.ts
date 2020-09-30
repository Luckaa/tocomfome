import { Router } from 'express';
import { RegisterClientController } from '../controllers/register-client.controller';

export class RegisterClientRoutes {
    private _router: Router;
    private _controller: RegisterClientController;

    constructor() {
        this._router = Router();
        this._controller = new RegisterClientController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.post('/registerClient', (req, res) => this._controller.registerClient(req, res));
    }
}