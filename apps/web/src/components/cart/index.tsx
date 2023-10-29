import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

// import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export const Cart = ({ children }) => {
  // const total = useSelector(state =>
  //   formatPrice(
  //     state.cart.reduce((totalSum, product) => {
  //       return totalSum + product.price * product.amount;
  //     }, 0)
  //   )
  // );

  // const cart = useSelector(state =>
  //   state.cart.map(product => ({
  //     ...product,
  //     subtotalFormatted: formatPrice(product.price * product.amount),
  //   }))
  // );

  // const dispatch = useDispatch();

  // function increment(product) {
  //   dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  // }

  // function decrement(product) {
  //   dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  // }

  const fakeProduct = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  };

  const cart = [fakeProduct];

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.price}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => {}}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={0} />
                  <button type="button" onClick={() => {}}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.price}</strong>
              </td>
              <td>
                <button type="button" onClick={() => {}}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{1}</strong>
        </Total>
      </footer>
    </Container>
  );
};
