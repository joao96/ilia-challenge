import React from 'react';
import { Container, NavLink } from './styles';

const NavbarItem = ({ href, Text }) => {
  return (
    <Container>
      <NavLink href={href}>{Text}</NavLink>
    </Container>
  );
};

export default NavbarItem;
