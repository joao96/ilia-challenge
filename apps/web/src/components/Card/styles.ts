import styled from 'styled-components';
import { darken } from 'polished';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    align-self: center;
    max-width: 180px;
    margin-bottom: 10px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.text.primary};
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: ${({ theme }) => theme.button.primary};
    color: ${({ theme }) => theme.text.secondary};
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.05, '#004385')};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
