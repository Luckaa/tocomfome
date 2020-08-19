import express, { Application } from 'express';
import cors from 'cors';
import { configureEnv } from './config';

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
    this.app.get('/', (request, response) => {
      return response.status(200).send({
        message: 'tocomfome',
      });
    });
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
