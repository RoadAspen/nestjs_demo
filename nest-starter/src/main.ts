import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 添加swagger
  const swagOptions = new DocumentBuilder()
    .setTitle('nestjs starter 接口文档')
    .setDescription('工程中所有接口的api')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swagOptions);
  SwaggerModule.setup('doc', app, document);
  app.listen(3000);
}
bootstrap();
