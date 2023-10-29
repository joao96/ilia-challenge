import { Order } from '../../../../entities/Order';
import { Order as RawOrder } from '@prisma/client';

export class PrismaOrderMapper {
  static toDomain(raw: RawOrder): Order {
    return new Order({
      id: raw.id,
      createdAt: raw.createdAt,
      items: raw.items,
      paymentMethod: raw.paymentMethod,
      shippingAddress: raw.shippingAddress,
      status: raw.status,
      value: raw.value,
    });
  }
}
