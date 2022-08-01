/**
 * 业务侧
 */
import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];
  readOne(id: number) {
    console.log(`你输入的id是${id}`);
    console.log(this.cats.find((cat) => cat.id === id));
    return this.cats.find((cat) => cat.id === id);
  }
  readAll() {
    console.log(`你获取了全部`);
    return this.cats;
  }
  create(body: CreateCatDto): string {
    console.log(`你输入的名称是 ${body.name} ,年龄是${body.age}`);
    const len = this.cats.length;
    const new_id = len ? this.cats[len - 1].id + 1 : 0;
    this.cats.push({ ...body, id: new_id });
    return `你新增的猫咪的名字是 ${body.name} ,年龄是${body.age}， ID签名为 ${new_id}`;
  }
  update(body: { id: number; data: CreateCatDto }): string {
    const { id, data } = body;
    let cat = this.readOne(id);
    if (!cat) return '您查询的猫咪不存在';
    cat = { ...cat, ...data };
    return `你更新的数据是${id},名称是 ${data.name} ,年龄是${data.age}`;
  }
  remove(id: string): string {
    return `你想删除的数据是${id}`;
  }
}
