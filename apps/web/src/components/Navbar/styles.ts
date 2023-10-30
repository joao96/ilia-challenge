import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a202c;
  box-shadow: 0 0 20px 3px;
  position: sticky;
  top: 0;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.text.secondary};
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;

export const Welcome = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text.secondary};
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
`;
