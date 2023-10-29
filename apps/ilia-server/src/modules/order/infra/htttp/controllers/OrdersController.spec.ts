import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './OrdersController';
import { OrdersService } from '@modules/order/services/OrdersService';
import { ICreateOrderDTO } from '@modules/order/dtos/ICreateOrderDTO';
import { randomUUID } from 'crypto';
import { Order } from '@modules/order/entities/order';

describe('OrdersController', () => {
  let controller: OrdersController;

  const fakeOrder: ICreateOrderDTO = {
    email: 'test@email.com',
    items: ['shirt', 'shoe'],
    paymentMethod: 'cash',
    shippingAddress: 'home',
    value: 10,
    status: 'pending',
  };

  const mockOrdersService = {
    create: jest.fn((dto) => {
      return {
        props: {
          ...dto,
          id: randomUUID(),
          createdAt: new Date(),
        },
      };
    }),
    update: jest.fn((dto) => {
      return new Order({
        ...fakeOrder,
        id: randomUUID(),
        createdAt: new Date(),
        status: dto.status,
      });
    }),
    findByEmail: jest.fn(() => {
      return {
        props: {
          ...fakeOrder,
        },
      };
    }),
    findById: jest.fn(() => {
      return {
        props: {
          ...fakeOrder,
        },
      };
    }),
    findAll: jest.fn(() => {
      return [
        {
          ...fakeOrder,
        },
        {
          ...fakeOrder,
        },
      ];
    }),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    })
      .overrideProvider(OrdersService)
      .useValue(mockOrdersService)
      .compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined;
  });

  it('should be able to create an order', () => {
    expect(controller.create(fakeOrder)).toEqual({
      props: {
        ...fakeOrder,
        id: expect.any(String),
        createdAt: expect.any(Date),
      },
    });

    expect(mockOrdersService.create).toHaveBeenCalled();
    expect(mockOrdersService.create).toHaveBeenCalledWith(fakeOrder);
  });

  it('should be able to update an order', async () => {
    const order = await controller.update('123', { status: 'canceled' });
    expect(order.status).toBe('canceled');

    expect(mockOrdersService.update).toHaveBeenCalled();
  });

  it('should be able to find an order by email', () => {
    expect(controller.findByEmail('test@email.com')).toEqual({
      props: {
        ...fakeOrder,
      },
    });

    expect(mockOrdersService.findByEmail).toHaveBeenCalled();
  });

  it('should be able to find an order by id', () => {
    expect(controller.findById('123')).toEqual({
      props: {
        ...fakeOrder,
      },
    });

    expect(mockOrdersService.findById).toHaveBeenCalled();
  });

  it('should be able to find all orders', () => {
    expect(controller.findAll()).toHaveLength(2);

    expect(mockOrdersService.findAll).toHaveBeenCalled();
  });
});
