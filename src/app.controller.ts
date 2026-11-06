import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { OrderDto } from './type/Order.dto.js';


import { ProductList } from './data/ProductList.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      products: ProductList,
      message: "success"
    }
  }
  
  @Post()
  @Render('index')
  async postIndex(@Body() body: OrderDto) {
    await this.appService.BuyProduct(body);
    return {
      products: ProductList,
      message: "success"
    }
  }
}
