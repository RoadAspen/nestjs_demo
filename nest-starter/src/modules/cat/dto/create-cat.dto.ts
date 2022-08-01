/**
 * 数据传输对象， 定义前后端传输的数据格式
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

/**
 * 数据传输对象， 定义前后端传输的数据格式
 * @description 定义白名单，任何不在白名单中的数据都会被过滤掉，不会进入处理程序中
 */
export class CreateCatDto {
  @ApiProperty({ description: '名字', default: 'Jack' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: '年龄', default: 1 })
  @IsInt()
  readonly age: number;
}
