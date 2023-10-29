import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';
import { Customer } from '../entities/Customer';

export abstract class ICustomerRepository {
  abstract create(customer: ICreateCustomerDTO): Promise<Customer>;
  abstract findByEmail(email: string): Promise<Customer | null>;
  abstract findById(id: string): Promise<Customer | null>;
  abstract findAll(): Promise<Customer[]>;
}
