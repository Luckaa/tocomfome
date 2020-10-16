import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';

export class UsersRoutes {
    private _router: Router;
    private _controller: UsersController;

    constructor() {
        this._router = Router();
        this._controller = new UsersController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.post('/users', (req, res) => this._controller.registerUser(req, res));
    }
}