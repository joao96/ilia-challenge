import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Patch,
} from '@nestjs/common';
import { ICreateOrderDTO } from 'src/modules/order/dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from 'src/modules/order/dtos/IUpdateOrderDTO';
import { OrdersService } from 'src/modules/order/services/OrdersService';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
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
