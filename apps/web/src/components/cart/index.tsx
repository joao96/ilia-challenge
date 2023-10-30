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
    <CartContainer>
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
          {groupedProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => remove(product.id)}>
                    <MdRemoveCircleOutline size={20} color="#0054a6" />
                  </button>
                  <input
                    type="number"
                    readOnly
                    value={getAmountInCart(product.id)}
                  />
                  <button type="button" onClick={() => add(product)}>
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
                <button type="button" onClick={() => deleteItem(product.id)}>
                  <MdDelete size={20} color="#0054a6" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button" onClick={purchase}>
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
