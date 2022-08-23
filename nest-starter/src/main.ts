import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule 作为本程序的唯一根module, nestjs 默认采用express作为底层
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 添加swagger start
  const swagOptions = new DocumentBuilder()
    .setTitle('nestjs starter 接口文档')
    .setDescription('工程中所有接口的api')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swagOptions);
  SwaggerModule.setup('doc', app, document);
  // 添加swagger end
  app.listen(3000);
}

// 启动程序
bootstrap();
