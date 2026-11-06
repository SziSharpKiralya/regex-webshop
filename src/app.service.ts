import { Injectable } from '@nestjs/common';
import { OrderDto } from './type/Order.dto.js';
import mysql from 'mysql2/promise';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async BuyProduct(body: OrderDto) {
    return true;
  }
}
