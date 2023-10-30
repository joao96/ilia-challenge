import { Order } from '../../../../shared/modules/Order';
import { formatDate, formatPrice } from '../../../../utils/format';
import { OrderItemContainer, OrderTable, Total } from './styles';

interface OrderItemProps {
  order: Order;
}

export const OrderItem = (props: OrderItemProps) => {
  const { order } = props;
  const { createdAt, items, paymentMethod, shippingAddress, status, value } =
    order.props;

  if (items.length === 0) {
    // change this to indicate an empty list
    return <></>;
  }
  const productNames = items.join(', ');
  return (
    <OrderItemContainer>
      <OrderTable>
        <thead>
          <tr>
            <th />
            <th>STATUS</th>
            <th>PRODUCTS</th>
            <th>SHIPPING ADDRESS</th>
            <th>PAYMENT METHOD</th>
            <th>DATE</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <strong>{status}</strong>
            </td>
            <td>
              <strong>{productNames}</strong>
            </td>
            <td>
              <strong>{shippingAddress}</strong>
            </td>
            <td>
              <strong>{paymentMethod}</strong>
            </td>
            <td>
              <strong>{formatDate(createdAt)}</strong>
            </td>
            <td />
          </tr>
        </tbody>
      </OrderTable>
      <footer>
        <button type="button">Add to Cart</button>
        <Total>
          <span>TOTAL</span>
          <strong>{formatPrice(value)}</strong>
        </Total>
      </footer>
    </OrderItemContainer>
  );
};
