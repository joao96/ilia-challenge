import { OrdersService } from '@modules/order/services/OrdersService';
import { ICreateOrderDTO } from '@modules/order/dtos/ICreateOrderDTO';
import { AppError } from '@shared/errors/AppError';

describe('OrdersService', () => {
  let service: OrdersService;

  const fakeOrder: ICreateOrderDTO = {
    email: 'test@email.com',
    items: ['shirt', 'shoe'],
    paymentMethod: 'cash',
    shippingAddress: 'home',
    value: 10,
    status: 'pending',
  };

  const fakeOrder2: ICreateOrderDTO = {
    ...fakeOrder,
    status: 'canceled',
  };

  beforeAll(async () => {
    service = new OrdersService({
      create: jest.fn().mockResolvedValue(fakeOrder),
      update: jest.fn().mockReturnValue(fakeOrder2),
      findByEmail: jest.fn().mockResolvedValue(fakeOrder),
      findById: jest
        .fn()
        .mockResolvedValueOnce(undefined)
        .mockResolvedValueOnce(fakeOrder)
        .mockResolvedValueOnce(fakeOrder),
      findAll: jest.fn().mockResolvedValue([fakeOrder, fakeOrder2]),
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined;
  });

  it('should be able to create an order', async () => {
    expect(await service.create(fakeOrder)).toEqual(fakeOrder);
  });

  it('should not be able to update an order that does not exists', async () => {
    await expect(service.update(fakeOrder)).rejects.toEqual(
      new AppError('Order not found.'),
    );
  });

  it('should be able to update an order', async () => {
    const order = await service.update({ id: '123', status: 'canceled' });
    expect(order.status).toBe('canceled');
  });

  it('should be able to find an order by email', async () => {
    expect(await service.findByEmail('test@email.com')).toEqual(fakeOrder);
  });

  it('should be able to find an order by id', async () => {
    expect(await service.findById('123')).toEqual(fakeOrder);
  });

  it('should be able to find all orders', async () => {
    expect(await service.findAll()).toHaveLength(2);
  });
});
