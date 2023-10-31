import React, { useEffect, useState } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { CartContainer, ProductTable, Total } from './styles';
import { Product } from '../../shared/types';
import { formatPrice } from '../../utils/format';

interface CartListProps {
  cart: Product[];
  remove: (id: number) => void;
  deleteItem: (id: number) => void;
  add: (product: Product) => void;
  purchase: () => void;
}

// TODO: make it reusable
export const CartList = ({
  cart,
  add,
  remove,
  deleteItem,
  purchase,
}: CartListProps) => {
  const [groupedProducts, setGroupedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const aux: Product[] = [];
    cart.forEach((product) => {
      const index = aux.findIndex((p) => p.id === product.id);
      if (index < 0) {
        aux.push(product);
      }
    });
    setGroupedProducts([...aux]);
  }, [cart]);

  function getAmountInCart(id: number) {
    return cart.filter((item) => item.id === id).length;
  }

  function getTotalValue() {
    const totalValue = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    return formatPrice(totalValue);
  }

  return (
    <CartContainer data-testid="cart-component">
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {groupedProducts.map((product) => (
            <tr data-testid="table-row" key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
                <div>
                  <button
                    data-testid="remove-button"
                    type="button"
                    onClick={() => remove(product.id)}
                  >
                    <MdRemoveCircleOutline size={20} color="#0054a6" />
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={getAmountInCart(product.id)}
                  />
                  <button
                    data-testid="add-button"
                    type="button"
                    onClick={() => add(product)}
                  >
                    <MdAddCircleOutline size={20} color="#0054a6" />
                  </button>
                </div>
              </td>
              <td>
                <strong>
                  {formatPrice(product.price * getAmountInCart(product.id))}
                </strong>
              </td>
              <td>
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={() => deleteItem(product.id)}
                >
                  <MdDelete size={20} color="#0054a6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button data-testid="purchase-button" type="button" onClick={purchase}>
          Purchase
        </button>
        <Total>
          <span>TOTAL</span>
          <strong>{getTotalValue()}</strong>
        </Total>
      </footer>
    </CartContainer>
  );
};
