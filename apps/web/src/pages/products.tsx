import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { getProducts, setProducts } from '../redux/productsSlice';
import type { GetStaticProps } from 'next';
import { Product } from '../shared/types';
import { NextPageWithLayout } from '../shared/types/page';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { getCustomer } from '../redux/customerSlice';
import { CardList } from '../containers/CardList';

interface ProductsProps {
  productsList: Product[];
}

export const getStaticProps = (async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const productsList = await res.json();
  return { props: { productsList } };
}) satisfies GetStaticProps<{
  productsList: ProductsProps;
}>;

const Products: NextPageWithLayout = ({ productsList }: ProductsProps) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const data = useSelector(getProducts);
  const customer = useSelector(getCustomer);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(setProducts(productsList));
    }
  }, [productsList]);

  useEffect(() => {
    const { email } = customer;
    if (!email) {
      push('/');
    }
  }, []);

  return (
    <ProductsContainer>
      <CardList products={data} />
    </ProductsContainer>
  );
};

export const ProductsContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
`;

Products.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Products;
