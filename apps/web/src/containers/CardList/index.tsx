import { Product } from '../../shared/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToCart, getItemsInCart } from '../../redux/cartSlice';
import { Card } from '../../components/Card';
import { CardListContainer } from './styles';

interface CardList {
  products: Product[];
}

export const CardList = (props: CardList) => {
  const dispatch = useAppDispatch();
  const itemsInCart = useAppSelector(getItemsInCart);

  function handleAddToCart(product: Product, quantity: number) {
    if (quantity < product.quantity) {
      dispatch(addToCart(product));
    } else {
      // toastify
    }
  }

  function getAmountInCart(product: Product) {
    const quantity = itemsInCart.filter(
      (item) => item.id === product.id,
    ).length;

    return quantity;
  }

  const { products } = props;

  return (
    <CardListContainer data-testid="card-list-component">
      {products.map((product) => (
        <Card
          data-testid="card-component"
          key={product.id}
          product={product}
          addToCart={handleAddToCart}
          amountInCart={getAmountInCart}
        />
      ))}
    </CardListContainer>
  );
};
