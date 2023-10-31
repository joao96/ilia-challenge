import { Injectable } from '@nestjs/common';
import { ICreateCustomerDTO } from 'src/modules/customer/dtos/ICreateCustomerDTO';
import { Customer } from 'src/modules/customer/entities/Customer';
import { ICustomerRepository } from 'src/modules/customer/repositories/ICustomerRepository';
import { PrismaCustomerMapper } from '../mappers/PrismaCustomerMapper';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class PrismaCustomerRepository implements ICustomerRepository {
  constructor(private prisma: PrismaService) {}

  async create(customer: ICreateCustomerDTO): Promise<Customer> {
    const newCustomer = await this.prisma.customer.create({
      data: {
        email: customer.email,
        name: customer.name,
      },
    });

    const domainCustomer = PrismaCustomerMapper.toDomain(newCustomer);

    return domainCustomer;
  }

  async findByEmail(email: string): Promise<Customer> {
    const customer = await this.prisma.customer.findFirst({
      where: {
        email,
      },
    });

    if (!customer) {
      return null;
    }

    const domainCustomer = PrismaCustomerMapper.toDomain(customer);
    return domainCustomer;
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        id,
      },
    });

    if (!customer) {
      return null;
    }

    const domainCustomer = PrismaCustomerMapper.toDomain(customer);
    return domainCustomer;
  }

  async findAll(): Promise<Customer[]> {
    const customers = await this.prisma.customer.findMany();

    const domainCustomers = customers.map((customer) =>
      PrismaCustomerMapper.toDomain(customer),
    );

    return domainCustomers;
  }
}
