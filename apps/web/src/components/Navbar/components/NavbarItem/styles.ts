import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const NavLink = styled(Link)<{ outline?: boolean }>`
  font-size: 18px;
  color: ${({ theme }) => theme.text.secondary};
  border: ${(props) => (props.outline ? '1px solid #fff' : '0px')};
  padding: ${(props) => (props.outline ? '10px' : '0px')};
  border-radius: ${(props) => (props.outline ? '8px' : '0px')};

  @media (min-width: 768px) {
    margin: 0px 10px;
  }

  @media (max-width: 768px) {
    border: ${(props) => (props.outline ? '1px solid #fff' : '0px')};
    padding: ${(props) => (props.outline ? '5px' : '0px')};
    border-radius: ${(props) => (props.outline ? '8px' : '0px')};
  }

  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
