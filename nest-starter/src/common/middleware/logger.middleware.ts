// 日志中间件
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    /**
     * 通过 req，res，next 来对用户操作做出反应
     */
    const { method, path } = req;
    console.log(`${method} ${path}`);
    // 必须调用next，否则程序就在这里停止了
    next();
  }
}
