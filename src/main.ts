import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { LoggingInterceptor } from './common/interceptors/logging-interceptor/logging-interceptor.interceptor';
import { ResponseInterceptor } from './common/interceptors/response-interceptor/response-interceptor.interceptor';
import { GlobalExceptionFilter } from './common/filters/global-exception/global-exception.filter';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ResponseInterceptor(),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
