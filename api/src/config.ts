import dotenv from 'dotenv';

const { NODE_ENV } = process.env;
console.log(NODE_ENV);


export function configureEnv() {
  switch (NODE_ENV) {
    case 'dev':
      dotenv.config({ path: '.env.dev' });
      break;
    case 'test':
      dotenv.config({ path: '.env.test' });
      break;
    default:
      dotenv.config();
  }
}
