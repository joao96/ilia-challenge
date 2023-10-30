import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NextPageWithLayout } from '../shared/types/page';
import Layout from '../components/Layout';
import { OrderList } from '../components/OrderList';
import { AppState } from '../redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Orders: NextPageWithLayout = () => {
  const { push } = useRouter();
  const { data } = useSelector((state: AppState) => state.customer);

  useEffect(() => {
    const { email } = data;
    if (!email) {
      push('/');
    }
  }, []);

  return (
    <OrdersContainer>
      <OrderList orders={data.orders ?? []} />
    </OrdersContainer>
  );
};

export const OrdersContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  @media (max-width: 768px) {
    padding: 0px;
    margin: 10px;
  }
`;

Orders.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Orders;
