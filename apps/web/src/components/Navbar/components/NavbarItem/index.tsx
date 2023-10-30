import React from 'react';
import { Container, NavLink } from './styles';

interface NavbarItemProps {
  href: string;
  text: string;
  click?: () => void;
}

const NavbarItem = ({ href, text, click }: NavbarItemProps) => {
  return (
    <Container>
      <NavLink onClick={click} href={href}>
        {text}
      </NavLink>
    </Container>
  );
};

export default NavbarItem;
