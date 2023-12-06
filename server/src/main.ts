import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;

  const config = new DocumentBuilder()
    .setTitle('y-sed project API Document')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/document', app, document);

  await app.listen(port);
}
bootstrap();
