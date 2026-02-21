import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { LoggingInterceptorInterceptor } from './logging-interceptor/logging-interceptor.interceptor';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )

  app.useGlobalInterceptors(new LoggingInterceptorInterceptor())
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
