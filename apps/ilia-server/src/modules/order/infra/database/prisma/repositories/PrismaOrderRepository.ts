import { Injectable } from '@nestjs/common';
import { ICreateOrderDTO } from 'src/modules/order/dtos/ICreateOrderDTO';
import { Order } from 'src/modules/order/entities/Order';
import { IOrderRepository } from 'src/modules/order/repositories/IOrderRepository';
import { PrismaOrderMapper } from '../mappers/PrismaOrderMapper';
import { OrderStatus, PaymentMethod } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { IUpdateOrderDTO } from 'src/modules/order/dtos/IUpdateOrderDTO';

@Injectable()
export class PrismaOrderRepository implements IOrderRepository {
  constructor(private prisma: PrismaService) {}

  async create(order: ICreateOrderDTO): Promise<Order> {
    const newOrder = await this.prisma.order.create({
      data: {
        shippingAddress: order.shippingAddress,
        value: order.value,
        items: order.items,
        customerEmail: order.email,
        paymentMethod: PaymentMethod[order.paymentMethod],
      },
    });

    const domainOrder = PrismaOrderMapper.toDomain(newOrder);

    return domainOrder;
  }

  async update({ id, status }: IUpdateOrderDTO): Promise<Order> {
    const orderStatus = OrderStatus[status];

    const updatedOrder = await this.prisma.order.update({
      where: {
        id,
      },
      data: {
        status: orderStatus,
      },
    });

    const domainOrder = PrismaOrderMapper.toDomain(updatedOrder);

    return domainOrder;
  }

  async findByEmail(email: string): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        customerEmail: email,
      },
    });

    const domainOrders = orders.map((order) =>
      PrismaOrderMapper.toDomain(order),
    );

    return domainOrders;
  }

  async findById(id: string): Promise<Order> {
    const order = await this.prisma.order.findUnique({
      where: {
        id,
      },
    });

    if (!order) {
      return null;
    }

    const domainOrder = PrismaOrderMapper.toDomain(order);
    return domainOrder;
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();

    const domainOrders = orders.map((order) =>
      PrismaOrderMapper.toDomain(order),
    );

    return domainOrders;
  }
}
