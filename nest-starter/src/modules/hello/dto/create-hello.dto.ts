/**
 * 数据库模型
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateHelloDto {
  @ApiProperty({ description: '名字', default: 'Jack' })
  readonly name: string;
  @ApiProperty({ description: '年龄', default: 1 })
  readonly age: number;
}
