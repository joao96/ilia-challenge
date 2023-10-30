import { useSelector } from 'react-redux';

import { Cart, Container, Content, Welcome } from './styles';
import NavbarItem from './components/NavbarItem';
import { MdShoppingBasket } from 'react-icons/md';
import { AppState } from '../../redux/store';

export const Navbar = () => {
  const { data } = useSelector((state: AppState) => state.customer);

  function shouldWelcome() {
    if (data.name) {
      return (
        <Welcome>
          <strong>Hi, {data.name}</strong>
        </Welcome>
      );
    }
  }

  return (
    <Container>
      <Content>
        {shouldWelcome()}
        <NavbarItem href={'/products'} Text={'Products'} />
        <NavbarItem href={'/orders'} Text={'My Orders'} />
        <Cart href="/cart">
          <div>
            <strong>My cart</strong>
            <span>{0} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Content>
    </Container>
  );
};
