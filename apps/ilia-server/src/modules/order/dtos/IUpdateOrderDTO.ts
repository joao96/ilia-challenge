import { OrderStatusType } from '../types';

export class IUpdateOrderDTO {
  id: string;
  status: OrderStatusType;
}
