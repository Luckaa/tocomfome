import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import config from './config';
import { CategoriesRoutes } from './presentation/routes/categories.routes';
import { InfoRoutes } from './presentation/routes/info.routes';
import { LoginRoutes } from './presentation/routes/login.routes';
import { RestaurantsRoutes } from './presentation/routes/restaurants.routes';
import { UsersRoutes } from './presentation/routes/users.routes';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public async create() {
    this.configuraMiddlewares();
    this.configureRoutes();
    this.connectToDatabase();
  }

  private configuraMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private configureRoutes() {
    const loginRoute = new LoginRoutes();
    const defaultRoute = new InfoRoutes();    
    const restaurantsRoute = new RestaurantsRoutes();
    const usersRoute = new UsersRoutes();
    const categoriesRoute = new CategoriesRoutes();

    this.app.use(loginRoute.getRoutes());
    this.app.use(defaultRoute.getRoutes());
    this.app.use(restaurantsRoute.getRoutes());
    this.app.use(usersRoute.getRoutes());
    this.app.use(categoriesRoute.getRoutes());
  }

  private async connectToDatabase() {
    return mongoose.connect(config.DB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('database conected');
      }).catch(err => {
        console.log('error to connect to database ', err)
      })
  }

  public start() {
    const PORT = config.PORT;
    this.app.listen(PORT, () => {
      console.log('ta rodando na porta', PORT);
    });
  }

  public getApplication() {
    return this.app;
  }
}
