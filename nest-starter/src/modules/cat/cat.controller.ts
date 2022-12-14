/**
 * 用户侧 处理用户提交的请求， 直接对接前端
 */
/**
 * 控制器的目的是接收应用程序的特定请求。
 * 路由机制控制哪个控制器接收哪个请求。
 * 很多时候，每个控制器都有多个路由，不同的路由可以执行不同的动作。
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserRole } from './classes/cat';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';

// @ApiTags swagger中用于给同一类的api打标签
@ApiBearerAuth()
@ApiTags('cat')
@Controller('/cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  // @Param 从路由中解析参数
  @Get()
  @ApiOperation({ summary: '获取一条数据' })
  @ApiQuery({ name: 'role', enum: UserRole })
  getCat(@Query('id', ParseIntPipe) id: number) {
    return this.catService.readOne(id) || '没有这个猫咪';
  }

  // @Param 从路由中解析参数
  @Get('all')
  @ApiOperation({ summary: '获取一条数据' })
  @ApiQuery({ name: 'role', enum: UserRole })
  getAll() {
    return this.catService.readAll();
  }

  // @Body 从 post put中解析 x-www-form-urlencoded 数据
  @Post()
  @ApiOperation({ summary: '创建一条数据' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 200, description: 'success' })
  create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return this.catService.create(createCatDto);
  }

  // 可以同时解析 param 和 body
  @Patch(':id')
  @ApiOperation({ summary: '更新一条数据' })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateCatDto) {
    console.log(body);
    return this.catService.update({ id, data: body });
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除一条数据' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.catService.remove(id);
  }
}
