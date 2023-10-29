import styled from "styled-components";

export const LoginContainer = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;

  align-items: center;
  justify-content: center;

  @media(max-width: 900px) {
    flex: 4;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: 'Poppins', sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button, input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`;

export const CreateRoomButton = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  font-size: 16px;
  font-weight: bold;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9)
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


