import Link from 'next/link';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: ${({ theme }) => theme.text.primary};
  margin: 20px auto;
  max-width: 300px;
  gap: 20px;

  p:nth-child(1) {
    font-size: 20px;
  }

  p:nth-child(2) {
    font-size: 15px;
  }
`;

export const LinkButton = styled(Link)`
  margin-top: 10px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: underline;
  cursor: pointer;
  font: inherit;
  padding: 0;
`;
