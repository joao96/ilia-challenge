import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  color: ${({ theme }) => theme.text.secondary};
  @media (min-width: 768px) {
    margin: 0px 10px;
  }

  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
