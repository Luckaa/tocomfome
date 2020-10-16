import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import config from './config';
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
    const loginRoutes = loginRoute.getRoutes();

    const defaultRoute = new InfoRoutes();
    const defaultRoutes = defaultRoute.getRoutes();

    const restaurantsRoute = new RestaurantsRoutes();
    const restaurantsRoutes = restaurantsRoute.getRoutes();

    const usersRoute = new UsersRoutes();
    const usersRoutes = usersRoute.getRoutes();


    this.app.use(loginRoutes);
    this.app.use(defaultRoutes);
    this.app.use(restaurantsRoutes);
    this.app.use(usersRoutes);
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
