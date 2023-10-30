import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header<{ display?: boolean }>`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a202c;
  box-shadow: 0 0 20px 3px;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    height: ${(props) => (props.display ? '200px' : '60px')};
  }
`;

export const Content = styled.div<{ display?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavBarToggle = styled.span<{ display?: boolean }>`
  position: absolute;
  top: ${(props) => (props.display ? '10px' : '')};
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;

  div {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
