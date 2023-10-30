import styled from 'styled-components';
import { NextPageWithLayout } from '../shared/types/page';
import Layout from '../components/Layout';
import { OrderList } from '../components/OrderList';
import { PaymentMethodType, OrderStatusType } from '../shared/modules/Order';

const fakeOrders = [
  {
    props: {
      id: 'fb7e41e9-1b2e-4d63-9b93-8d7ae96ee491',
      createdAt: '2023-10-28T21:18:05.273Z',
      items: ['camisa', 'sapato'],
      paymentMethod: 'credit_card' as PaymentMethodType,
      shippingAddress: 'minha casa',
      status: 'pending' as OrderStatusType,
      value: 50,
    },
  },
  {
    props: {
      id: '5ecc2489-768a-414c-9ae4-fa51e2702e84',
      createdAt: '2023-10-28T21:21:18.193Z',
      items: ['calça', 'telefone'],
      paymentMethod: 'credit_card' as PaymentMethodType,
      shippingAddress: 'minha casa',
      status: 'pending' as OrderStatusType,
      value: 45,
    },
  },
];

const Orders: NextPageWithLayout = () => {
  // const { data } = useSelector((state: AppState) => state.customer);

  return (
    <OrdersContainer>
      <OrderList orders={fakeOrders} />
    </OrdersContainer>
  );
};

export const OrdersContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
`;

Orders.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Orders;
