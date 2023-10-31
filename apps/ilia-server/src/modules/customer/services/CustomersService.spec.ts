import { ICreateCustomerDTO } from '@modules/customer/dtos/ICreateCustomerDTO';
import { CustomersService } from './CustomersService';
import { AppError } from '@shared/errors/AppError';

describe('CustomersService', () => {
  let service: CustomersService;

  const fakeCustomer: ICreateCustomerDTO = {
    email: 'test@email.com',
    name: 'Test Name',
  };

  const fakeCustomer2: ICreateCustomerDTO = {
    email: 'test2@email.com',
    name: 'Test Name 2',
  };

  const fakeCustomer3: ICreateCustomerDTO = {
    email: 'test3@email.com',
    name: 'Test Name 3',
  };

  beforeAll(async () => {
    service = new CustomersService({
      create: jest.fn().mockResolvedValue(fakeCustomer),
      findByEmail: jest
        .fn()
        .mockResolvedValueOnce(fakeCustomer3)
        .mockResolvedValueOnce(undefined)
        .mockResolvedValueOnce(fakeCustomer3),
      findById: jest.fn().mockResolvedValue(fakeCustomer),
      findAll: jest.fn().mockResolvedValue([fakeCustomer, fakeCustomer2]),
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined;
  });

  it('should not be able to create a customer that already exists', async () => {
    await expect(service.create(fakeCustomer)).rejects.toEqual(
      new AppError('Customer already exists!'),
    );
  });

  it('should be able to create a new customer', async () => {
    expect(await service.create(fakeCustomer2)).toEqual(fakeCustomer);
  });

  // it('should be able to find a customer by email', async () => {
  //   expect(await service.findByEmail('test@email.com')).toEqual(fakeCustomer3);
  // });

  it('should be able to find a customer by id', async () => {
    expect(await service.findById('123')).toEqual(fakeCustomer);
  });

  it('should be able to find all customers', async () => {
    expect(await service.findAll()).toHaveLength(2);
  });
});
