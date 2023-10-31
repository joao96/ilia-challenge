import { Order } from '../../shared/modules/Order';
import NotFound from '../NotFound';
import { OrderItem } from './components/OrderItem';
import { ListContainer } from './styles';

interface OrderList {
  orders: Order[];
}

export const OrderList = (props: OrderList) => {
  const { orders } = props;

  return (
    <ListContainer data-testid="order-list-component">
      {orders.length ? (
        <>
          {orders.map((order) => (
            <OrderItem
              data-testid="order-component"
              key={order.props.id}
              order={order}
            />
          ))}
        </>
      ) : (
        <NotFound
          message={'No orders found.'}
          description={
            'Please place an order and come back to see your purchases.'
          }
        />
      )}
    </ListContainer>
  );
};
