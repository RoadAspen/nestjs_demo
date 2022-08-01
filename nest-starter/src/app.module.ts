import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatModule } from './modules/cat/cat.module';

@Module({
  imports: [CatModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('consumer', consumer);
    consumer.apply(LoggerMiddleware).forRoutes('hello');
  }
}
