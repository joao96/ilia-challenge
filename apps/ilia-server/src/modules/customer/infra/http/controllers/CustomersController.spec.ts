import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './CustomersController';
import { CustomersService } from '@modules/customer/services/CustomersService';

describe('CustomerController', () => {
  let controller: CustomersController;

  const mockCustomersService = {
    create: jest.fn((dto) => {
      return {
        props: {
          ...dto,
        },
      };
    }),
    findByEmail: jest.fn((email) => {
      return {
        props: {
          name: 'Test Name',
          email,
        },
      };
    }),
    findById: jest.fn(() => {
      return {
        props: {
          name: 'Test Name',
          email: 'test@email.com',
        },
      };
    }),
    findAll: jest.fn(() => {
      return [
        {
          props: {
            name: 'Test Name 1',
            email: 'test1@email.com',
          },
        },
        {
          props: {
            name: 'Test Name 2',
            email: 'test2@email.com',
          },
        },
      ];
    }),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService],
    })
      .overrideProvider(CustomersService)
      .useValue(mockCustomersService)
      .compile();

    controller = module.get<CustomersController>(CustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined;
  });

  it('should be able to create a customer', () => {
    const customer = { email: 'test@email.com', name: 'Test Name' };
    expect(controller.create(customer)).toEqual({
      props: {
        name: 'Test Name',
        email: 'test@email.com',
      },
    });

    expect(mockCustomersService.create).toHaveBeenCalled();
  });

  it('should be able to find a customer by email', () => {
    expect(controller.findByEmail('test@email.com')).toEqual({
      props: {
        name: 'Test Name',
        email: 'test@email.com',
      },
    });

    expect(mockCustomersService.findByEmail).toHaveBeenCalled();
  });

  it('should be able to find a customer by id', () => {
    expect(controller.findById('123')).toEqual({
      props: {
        name: 'Test Name',
        email: 'test@email.com',
      },
    });

    expect(mockCustomersService.findById).toHaveBeenCalled();
  });

  it('should be able to find all customers', () => {
    expect(controller.findAll()).toHaveLength(2);

    expect(mockCustomersService.findAll).toHaveBeenCalled();
  });
});
