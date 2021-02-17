import { Router } from 'express';
import multer from 'multer';
import { UsersController } from '../controllers/users.controller';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

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
        this._router.post('/users', upload.any(), (req, res) => this._controller.registerUser(req, res));
    }
}