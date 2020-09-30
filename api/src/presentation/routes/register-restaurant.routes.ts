import { Router } from 'express';
import { RegisterRestaurantController } from '../controllers/register-restaurant.controller';

export class RegisterRestaurantRoutes {
    private _router: Router;
    private _controller: RegisterRestaurantController;

    constructor() {
        this._router = Router();
        this._controller = new RegisterRestaurantController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.post('/registerRestaurant', (req, res) => this._controller.registerRestaurant(req, res));
    }
}