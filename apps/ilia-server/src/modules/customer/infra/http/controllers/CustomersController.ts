import { ICreateCustomerDTO } from '@modules/customer/dtos/ICreateCustomerDTO';
import { CustomersService } from '@modules/customer/services/CustomersService';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  HttpCode,
} from '@nestjs/common';

@Controller('/v1/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @HttpCode(201)
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
