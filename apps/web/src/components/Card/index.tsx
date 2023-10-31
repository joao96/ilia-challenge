import { Product } from '../../shared/types';
import { MdAddShoppingCart } from 'react-icons/md';
import { CardContainer } from './styles';
import { formatPrice } from '../../utils/format';

interface CardProps {
  product: Product;
  amountInCart: (product: Product) => number;
  addToCart: (product: Product, quantity: number) => void;
}

export const Card = (props: CardProps) => {
  const { product, addToCart, amountInCart } = props;

  const quantity = amountInCart(product);
  return (
    <CardContainer>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>{formatPrice(product.price)}</span>
      <span>In Stock: {product.quantity - quantity}</span>
      <button type="button" onClick={() => addToCart(product, quantity)}>
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> {quantity}
        </div>
        <span>ADD TO CART</span>
      </button>
    </CardContainer>
  );
};
