import { Injectable } from '@nestjs/common';
import { IOrderRepository } from '../repositories/IOrderRepository';
import { Order } from '../entities/Order';
import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import { AppError } from '@shared/errors/AppError';

@Injectable()
export class OrdersService {
  constructor(private ordersRepository: IOrderRepository) {}

  async create(order: ICreateOrderDTO): Promise<Order> {
    const { items, paymentMethod, shippingAddress, value, email } = order;

    const newOrder = await this.ordersRepository.create({
      items,
      paymentMethod,
      shippingAddress,
      value,
      status: 'pending',
      email,
    });

    return newOrder;
  }

  async update({ id, status }: IUpdateOrderDTO): Promise<Order> {
    const order = await this.findById(id);

    if (!order) {
      throw new AppError('Order not found.');
    }

    const updatedOrder = await this.ordersRepository.update({ id, status });

    return updatedOrder;
  }

  async findByEmail(email: string): Promise<Order[]> {
    const orders = await this.ordersRepository.findByEmail(email);
    return orders;
  }

  async findById(id: string): Promise<Order | null> {
    const order = await this.ordersRepository.findById(id);
    return order;
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.ordersRepository.findAll();
    return orders;
  }
}
