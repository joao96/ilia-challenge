import { useDispatch, useSelector } from 'react-redux';

import { Cart, Container, Content, Welcome } from './styles';
import NavbarItem from './components/NavbarItem';
import { MdShoppingBasket } from 'react-icons/md';
import { AppState } from '../../redux/store';
import { emptyCart } from '../../redux/cartSlice';
import { emptyCustomer } from '../../redux/customerSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: AppState) => state.customer);
  const { itemsInCart } = useSelector((state: AppState) => state.cart);

  function shouldWelcome() {
    if (data.name) {
      return (
        <Welcome>
          <strong>Hi, {data.name}!</strong>
        </Welcome>
      );
    }
  }

  function handleLogout() {
    dispatch(emptyCart());
    dispatch(emptyCustomer());
  }

  return (
    <Container>
      <Content>
        {shouldWelcome()}
        <NavbarItem href={'/products'} text={'Products'} />
        <NavbarItem href={'/orders'} text={'My Orders'} />
        <Cart href="/cart">
          <div>
            <strong>My cart</strong>
            <span>{itemsInCart.length} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
        <NavbarItem click={handleLogout} href={'/'} text={'Logout'} />
      </Content>
    </Container>
  );
};
