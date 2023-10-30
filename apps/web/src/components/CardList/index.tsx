import { Product } from '../../shared/types';
import { Card } from './components/Card/card';
import { ListContainer } from './styles';

interface CardList {
  products: Product[];
}

export const CardList = (props: CardList) => {
  const { products } = props;

  return (
    <ListContainer>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ListContainer>
  );
};
