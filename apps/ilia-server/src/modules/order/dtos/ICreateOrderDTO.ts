import { OrderStatusType, PaymentMethodType } from '../types';

export class ICreateOrderDTO {
  value: number;
  items: string[];
  shippingAddress: string;
  paymentMethod: PaymentMethodType;
  status: OrderStatusType;
  email: string;
}
