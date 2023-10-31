import { useDispatch, useSelector } from 'react-redux';
import { Cart, Container, Content, NavBarToggle, Welcome } from './styles';
import NavbarItem from './components/NavbarItem';
import { MdShoppingBasket } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { emptyCart, getItemsInCart } from '../../redux/cartSlice';
import { emptyCustomer, getCustomer } from '../../redux/customerSlice';
import { useState } from 'react';

export const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector(getCustomer);
  const itemsInCart = useSelector(getItemsInCart);
  const [displayMobile, setDisplayMobile] = useState(false);

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

  function toggleNavBar() {
    setDisplayMobile(!displayMobile);
  }

  return (
    <Container display={displayMobile}>
      <NavBarToggle display={displayMobile} onClick={toggleNavBar}>
        <div>
          <GiHamburgerMenu />
        </div>
      </NavBarToggle>
      <Content display={displayMobile}>
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
