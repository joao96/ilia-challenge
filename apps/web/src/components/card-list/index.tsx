import { Product } from '../../shared/types';
import { Card } from '../card/card';
import { ListContainer } from './styles';

interface CardList {
  products: Product[]
}


export const CardList = (props: CardList) => {
  const { products } = props;

  return (
    <ListContainer>
      {products.map((product) => (
        <Card product={product}/>
      ))}
    </ListContainer>
  );
}
