import { Customer } from 'src/modules/customer/entities/Customer';
import { Customer as RawCustomer } from '@prisma/client';

export class PrismaCustomerMapper {
  static toDomain(raw: RawCustomer): Customer {
    return new Customer({
      id: raw.id,
      createdAt: raw.createdAt,
      name: raw.name,
      email: raw.email,
    });
  }
}
