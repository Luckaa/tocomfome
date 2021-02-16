import { Router } from 'express';
import { CategoriesController } from '../controllers/categories.controller';

export class CategoriesRoutes {
    private _router: Router;
    private _controller: CategoriesController;

    constructor() {
        this._router = Router();
        this._controller = new CategoriesController();
    }

    getRoutes() {
        this.mapRoutes();
        return this._router;
    }

    private mapRoutes() {
        this._router.get('/categories', (req, res) => this._controller.findCategories(req, res));
        this._router.post('/categories', (req, res) => this._controller.createCategory(req, res));
    }
}