import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const VP = new ValidationPipe({
  whitelist: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(VP);
  await app.listen(3000);
}

bootstrap().then();
