/**
 * swagger 文档相关
 */
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: 'Jack', description: '名称' })
  name: string;
  @ApiProperty({ example: 20, description: '年纪' })
  age: number;
  @ApiProperty({ example: UserRole })
  role: UserRole;
}
