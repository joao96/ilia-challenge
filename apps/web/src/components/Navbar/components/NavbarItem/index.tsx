import React from 'react';
import { Container, NavLink } from './styles';

interface NavbarItemProps {
  href: string;
  text: string;
  click?: () => void;
  outline?: boolean;
}

const NavbarItem = ({
  href,
  text,
  click,
  outline = false,
}: NavbarItemProps) => {
  return (
    <Container>
      <NavLink outline={outline} onClick={click} href={href}>
        {text}
      </NavLink>
    </Container>
  );
};

export default NavbarItem;
