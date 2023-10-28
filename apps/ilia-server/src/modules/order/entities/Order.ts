import { OrderStatusType, PaymentMethodType } from '../types';

export interface OrderProps {
  id: string;
  value: number;
  items: string[];
  shippingAddress: string;
  paymentMethod: PaymentMethodType;
  status: OrderStatusType;
  createdAt: Date;
}

export class Order {
  private props: OrderProps;

  constructor(props: OrderProps) {
    this.props = {
      ...props,
    };
  }
}
