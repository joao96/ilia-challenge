import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NextPageWithLayout } from '../shared/types/page';
import Layout from '../components/Layout';
import { CartList } from '../components/Cart';
import { AppState } from '../redux/store';
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
  emptyCart,
} from '../redux/cartSlice';
import { Product } from '../shared/types';
import { orderCreate } from '../services/Order';
import { setOrders } from '../redux/customerSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Cart: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.customer);
  const { push } = useRouter();

  function handleRemove(id: number) {
    dispatch(removeFromCart(id));
  }

  function handleDelete(id: number) {
    dispatch(deleteFromCart(id));
  }

  function handleAdd(product: Product) {
    const amountInCart = getAmountInCart(product.id);
    if (amountInCart < product.quantity) {
      dispatch(addToCart(product));
    } else {
      // toastify
    }
  }

  async function handlePurchase() {
    if (itemsInCart.length > 0) {
      const { email } = data;
      const response = await orderCreate({ email, products: itemsInCart });
      if (response.props.id) {
        dispatch(emptyCart());
        dispatch(setOrders(response));
        // toastify
      }
    }
  }

  function getAmountInCart(id: number) {
    return itemsInCart.filter((item) => item.id === id).length;
  }

  useEffect(() => {
    const { email } = data;
    if (!email) {
      push('/');
    }
  }, []);

  return (
    <CartContainer>
      <CartList
        cart={itemsInCart}
        remove={handleRemove}
        deleteItem={handleDelete}
        add={handleAdd}
        purchase={handlePurchase}
      />
    </CartContainer>
  );
};

export const CartContainer = styled.div`
  max-width: 1020px;
  margin: 0px auto;
  padding: 0 20px 50px;

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

Cart.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Cart;
