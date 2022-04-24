import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //CORS
  app.enableCors()

  //SWAGGER
  const config = new DocumentBuilder()
  .setTitle('Virtual Store')
  .setDescription('API CRUD Virtual Store')
  .setVersion('1.0')
  .addTag('API')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
