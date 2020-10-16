import { Router } from 'express';
import { BuscarRestaurantController } from '../controllers/restaurants';

export class RestaurantsRoutes {
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
        this._router.get('/restaurants', (req, res) => this._controller.findRestaurants(req, res));
    }
}