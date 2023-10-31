import styled from 'styled-components';
import { darken } from 'polished';

export const OrderItemContainer = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 30px;
    padding: 10px;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme.button.primary};
      color: ${({ theme }) => theme.text.secondary};
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#0054a6')};
      }
    }
  }
`;

export const OrderTable = styled.table`
  width: 100%;

  thead {
    th:nth-child(1) {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
    @media (max-width: 768px) {
      padding: 0px;
    }
  }

  tbody {
    td:nth-child(1) {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    @media (max-width: 768px) {
      padding: 0px;
    }
  }

  strong {
    color: ${({ theme }) => theme.text.primary};
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #dddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
