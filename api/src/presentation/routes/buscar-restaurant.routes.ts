import { Router } from 'express';
import { BuscarRestaurantController } from '../controllers/buscar-restaurant.controller';

export class BuscarRestaurantRoutes {
    private _router: Router;
    private _controller: BuscarRestaurantController;

    constructor() {
        this._router = Router();
        this._controller = new BuscarRestaurantController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.get('/buscarRestaurant', (req, res) => this._controller.restaurants(req, res));
    }
}