import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { IUpdateOrderDTO } from '../dtos/IUpdateOrderDTO';
import { Order } from '../entities/Order';

export abstract class IOrderRepository {
  abstract create(order: ICreateOrderDTO): Promise<Order>;
  abstract update(order: IUpdateOrderDTO): Promise<Order>;
  abstract findByEmail(email: string): Promise<Order[]>; // by customer
  abstract findById(id: string): Promise<Order | null>; // by order id
  abstract findAll(): Promise<Order[]>;
}
