import styled from 'styled-components';

export const DefaultButton = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.secondary};
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  font-size: 16px;
  font-weight: bold;

  transition: filter 0.2s;

  &.outlined {
    background: ${({ theme }) => theme.text.secondary};
    border: 1px solid #835afd;
    color: #835afd;
  }

  &.cancel {
    background: #dbdcdd;
    color: #737380;
  }

  &.terminate {
    background: #e73f5d;
  }

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
