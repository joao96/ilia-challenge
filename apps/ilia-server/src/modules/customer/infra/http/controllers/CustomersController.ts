import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ICreateCustomerDTO } from 'src/modules/customer/dtos/ICreateCustomerDTO';
import { CustomersService } from 'src/modules/customer/services/CustomersService';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() createCustomerDTO: ICreateCustomerDTO) {
    return this.customersService.create(createCustomerDTO);
  }

  @Get('')
  findByEmail(@Query('email') email: string) {
    return this.customersService.findByEmail(email);
  }

  @Get('all')
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.customersService.findById(id);
  }
}
