import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from '../repositories/ICustomerRepository';
import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';
import { Customer } from '../entities/Customer';
import { AppError } from '@shared/errors/AppError';

@Injectable()
export class CustomersService {
  constructor(private customersRepository: ICustomerRepository) {}

  async create(customer: ICreateCustomerDTO): Promise<Customer> {
    const { name, email } = customer;
    const customerAlreadyExists = await this.findByEmail(email);

    if (customerAlreadyExists) {
      throw new AppError('Customer already exists!');
    }

    const newCustomer = await this.customersRepository.create({
      name,
      email,
    });

    return newCustomer;
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.customersRepository.findByEmail(email);
    return customer;
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = await this.customersRepository.findById(id);
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    const customers = await this.customersRepository.findAll();
    return customers;
  }
}
