import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../../shared/types';
import { MdAddShoppingCart } from 'react-icons/md';
import { CardContainer } from './styles';
import { addToCart } from '../../../../redux/cartSlice';
import { AppState } from '../../../../redux/store';
import { useEffect, useState } from 'react';
import { formatPrice } from '../../../../utils/format';

interface CardProps {
  product: Product;
}

export const Card = (props: CardProps) => {
  const [amountInCart, setAmountInCart] = useState(0);
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state: AppState) => state.cart);

  const { product } = props;

  function handleAddToCart() {
    if (amountInCart < product.quantity) {
      dispatch(addToCart(product));
    } else {
      // toastify
    }
  }

  function getAmountInCart() {
    const quantity = itemsInCart.filter(
      (item) => item.id === product.id,
    ).length;

    setAmountInCart(quantity);
  }

  useEffect(() => {
    getAmountInCart();
  }, [itemsInCart]);

  return (
    <CardContainer>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{formatPrice(product.price)}</span>
      <span>In Stock: {product.quantity - amountInCart}</span>
      <button type="button" onClick={handleAddToCart}>
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> {amountInCart}
        </div>
        <span>ADD TO CART</span>
      </button>
    </CardContainer>
  );
};
