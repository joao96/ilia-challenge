import { Product } from '../../shared/types';
import { CardContainer } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';


interface CardProps {
  product: Product;
}

export const Card = (props: CardProps) => {
  const { product } = props;

  return (
    <CardContainer>
      <img src={product.image} alt={product.title} />
      <strong>{product.title}</strong>
      <span>R$ {product.price}</span>
      <button type="button" onClick={() => console.log("hello")}>
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> { 0}
        </div>

        <span>ADD TO CART</span>
      </button>
    </CardContainer>
  );
}
