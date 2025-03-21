import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new I18nValidationPipe());
  app.useGlobalFilters(new I18nValidationExceptionFilter());
  app.enableCors({options: {
    origin: [
      'http://localhost:3000',
      'https://your-production-frontend.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
  }});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
