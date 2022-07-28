/**
 * 用户侧 处理用户提交的请求， 直接对接前端
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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserRole } from './classes/hello';
import { CreateHelloDto } from './dto/create-hello.dto';
import { HelloService } from './hello.service';

// @ApiTags swagger中用于给同一类的api打标签
@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  // @Param 从路由中解析参数
  @Get(':id')
  @ApiOperation({ summary: '获取一条数据' })
  @ApiQuery({ name: 'role', enum: UserRole })
  getHello(@Param('id') id: string) {
    return this.helloService.readOne(id);
  }

  // @Body 从 post put中解析 x-www-form-urlencoded 数据
  @Post()
  @ApiOperation({ summary: '创建一条数据' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 200, description: 'success' })
  create(@Body() createHelloDto: CreateHelloDto) {
    console.log(createHelloDto);
    return this.helloService.create(createHelloDto);
  }

  // 可以同时解析 param 和 body
  @Patch(':id')
  @ApiOperation({ summary: '更新一条数据' })
  update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
    console.log(body);
    return this.helloService.update({ id, ...body });
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除一条数据' })
  remove(@Param('id') id: string) {
    return this.helloService.remove(id);
  }
}
