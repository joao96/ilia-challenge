import React from 'react';
import { NotFoundContainer, LinkButton } from './styles';

interface NotFoundProps {
  message: string;
  description: string;
}

const NotFound = ({ message, description }: NotFoundProps) => {
  return (
    <NotFoundContainer>
      <p>{message}</p>
      <p>{description}</p>
      <LinkButton href="/products">See Products</LinkButton>
    </NotFoundContainer>
  );
};

export default NotFound;
