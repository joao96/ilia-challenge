import { Product } from '../../shared/types';
import { Card } from './components/Card';
import { ListContainer } from './styles';

interface CardList {
  products: Product[];
}

export const CardList = (props: CardList) => {
  const { products } = props;

  return (
    <ListContainer data-testid="card-list-component">
      {products.map((product) => (
        <Card data-testid="card-component" key={product.id} product={product} />
      ))}
    </ListContainer>
  );
};
