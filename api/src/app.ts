import express, { Application } from 'express';
import cors from 'cors';
import { configureEnv } from './config';
import { LoginRoutes } from './presentation/routes/login.routes';
import { InfoRoutes } from './presentation/routes/info.routes';
import { RegisterClientRoutes } from './presentation/routes/register-client.routes';
import { RegisterRestaurantRoutes } from './presentation/routes/register-restaurant.routes';
import { BuscarRestaurantRoutes } from './presentation/routes/buscar-restaurant.routes';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public async create() {
    configureEnv();
    this.configuraMiddlewares();
    this.configureRoutes();
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


    const buscarRestaurantRoute = new BuscarRestaurantRoutes();
    const buscarRestaurantRoutes = buscarRestaurantRoute.getRoutes();

    const registerClientRoute = new RegisterClientRoutes();
    const registerClientRoutes = registerClientRoute.getRoutes();

    const registerRestaurantRoute = new RegisterRestaurantRoutes();
    const registerRestaurantRoutes = registerRestaurantRoute.getRoutes();


    this.app.use(loginRoutes);
    this.app.use(defaultRoutes);
    this.app.use(registerClientRoutes);
    this.app.use(registerRestaurantRoutes);
    this.app.use(buscarRestaurantRoutes)

  }

  public start() {
    const PORT = process.env.PORT;
    this.app.listen(PORT, () => {
      console.log('ta rodando na porta', PORT);
    });
  }

  public getApplication() {
    return this.app;
  }
}
