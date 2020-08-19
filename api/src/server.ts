import { App } from './app';

async function bootstrap(){
    const app = new App();
    await app.create();
    app.start();
}

bootstrap();