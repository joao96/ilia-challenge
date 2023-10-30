import { Order } from '../../shared/modules/Order';
import { OrderItem } from './components/OrderItem';
import { ListContainer } from './styles';

interface OrderList {
  orders: Order[];
}

export const OrderList = (props: OrderList) => {
  const { orders } = props;

  return (
    <ListContainer>
      {orders.map((order) => (
        <OrderItem key={order.props.id} order={order} />
      ))}
    </ListContainer>
  );
};
