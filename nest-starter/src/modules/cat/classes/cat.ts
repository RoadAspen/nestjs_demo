/**
 * swagger 文档相关
 */
import { ApiProperty } from '@nestjs/swagger';

// 定义
export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Cat {
  @ApiProperty({ example: 'Jack', description: '名称' })
  name: string;
  @ApiProperty({ example: 20, description: '年纪' })
  age: number;
  @ApiProperty({ example: UserRole })
  role: UserRole;
}
