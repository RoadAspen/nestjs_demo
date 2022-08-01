import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HelloModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('consumer', consumer);
    consumer.apply(LoggerMiddleware).forRoutes('hello');
  }
}
