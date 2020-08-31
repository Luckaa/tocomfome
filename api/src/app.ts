import express, { Application } from 'express';
import cors from 'cors';
import { configureEnv } from './config';
import { LoginRoutes } from './presentation/routes/login.routes';

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

    this.app.use(loginRoutes);
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
