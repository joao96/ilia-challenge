export type OrderStatusType = 'pending' | 'shipped' | 'delivered' | 'canceled';

export type PaymentMethodType = 'credit_card' | 'cash' | 'other';

export interface Order {
  props: {
    id?: string;
    value: number;
    items: string[];
    shippingAddress: string;
    paymentMethod: PaymentMethodType;
    status?: OrderStatusType;
    createdAt?: string;
  };
}
