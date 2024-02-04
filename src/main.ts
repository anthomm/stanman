import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const cookieSession = require('cookie-session');
const VP = new ValidationPipe({
  whitelist: true,
});
const CS = cookieSession({ keys: ['DevKey'] });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CS);
  app.useGlobalPipes(VP);
  await app.listen(3000);
}

bootstrap().then();
