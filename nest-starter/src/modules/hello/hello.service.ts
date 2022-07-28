/**
 * 业务侧
 */
import { Injectable } from '@nestjs/common';

interface IDetail {
  name: string;
  age: number;
}
@Injectable()
export class HelloService {
  readOne(id: string): string {
    return `你输入的id是${id}`;
  }
  create(body: IDetail): string {
    return `你输入的名称是 ${body.name} ,年龄是${body.age}`;
  }
  update(body: { id: string; name: string; age: number }): string {
    const { id, name, age } = body;
    return `你更新的数据是${id},名称是 ${name} ,年龄是${age}`;
  }
  remove(id: string): string {
    return `你想删除的数据是${id}`;
  }
}
