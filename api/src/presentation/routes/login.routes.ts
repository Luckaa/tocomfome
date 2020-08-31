import { Router } from 'express';
import { LoginController } from '../controllers/login.controller';

export class LoginRoutes {
    private _router: Router;
    private _controller: LoginController;

    constructor() {
        this._router = Router();
        this._controller = new LoginController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.post('/login', (req, res) => this._controller.login(req, res));
    }
}