import React from 'react';

import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';


import logo from '../../assets/images/logo.svg';
import Link from 'next/link';
import { Cart, Container } from './styles';

export const Header = () => {
  // const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link href="/">
        {/* <img src={logo} alt="Rocketshoes" /> */}
      </Link>

      <Cart href="/cart">
        <div>
          <strong>My cart</strong>
          <span>{0} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
