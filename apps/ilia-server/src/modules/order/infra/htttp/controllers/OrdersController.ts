import { ICreateOrderDTO } from '@modules/order/dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '@modules/order/dtos/IUpdateOrderDTO';
import { OrdersService } from '@modules/order/services/OrdersService';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
  HttpCode,
} from '@nestjs/common';

@Controller('/v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createOrderDTO: ICreateOrderDTO) {
    return this.ordersService.create(createOrderDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDTO: IUpdateOrderDTO) {
    const orderDTO: IUpdateOrderDTO = { id, status: updateOrderDTO.status };
    return this.ordersService.update(orderDTO);
  }

  @Get('')
  findByEmail(@Query('email') email: string) {
    return this.ordersService.findByEmail(email);
  }

  @Get('all')
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.ordersService.findById(id);
  }
}
