/**
 * 处理用户提交的请求， 直接对接前端
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // @Param 从路由中解析参数
  @Get(':id')
  getHello(@Param('id') id: string) {
    return `你输入的id是${id}`;
  }

  // @Body 从 post put中解析 x-www-form-urlencoded 数据
  @Post()
  create(@Body() body) {
    console.log(body);
    return `你输入的名称是 ${body.name} ,年龄是${body.age}`;
  }

  // 可以同时解析 param 和 body
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `你更新的数据是${id},名称是 ${body.name} ,年龄是${body.age}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `你想删除的数据是${id}`;
  }
}
