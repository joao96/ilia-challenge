import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import {
  Content,
  Form,
  LoginContainer,
  Separator,
  ToggleButton,
} from './styles';
import { setCustomer } from '../../redux/customerSlice';
import { useRouter } from 'next/router';
import { handleLogin, handleRegister } from './utils/handlers';
import { useTheme } from 'styled-components';
import toast from 'react-hot-toast';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isNew, setisNew] = useState(false);
  const { push } = useRouter();
  const theme = useTheme();

  const dispatch = useDispatch();

  async function onLogin(e: FormEvent) {
    e.preventDefault();
    const customer = await handleLogin(email);
    if (customer) {
      const { email: customerEmail, name, orders } = customer;
      toast.success(`Hello ${name}! Welcome to the shop.`);
      dispatch(setCustomer({ name, email: customerEmail, orders }));
      push('/products');
    } else {
      toast.error(`Could not find your credentials, try again.`);
    }
  }

  async function onRegister(e: FormEvent) {
    e.preventDefault();
    const customer = handleRegister(email, name);
    if (customer) {
      dispatch(setCustomer({ name, email }));
      push('/products');
    }
  }

  function toggleIsNew() {
    setisNew(!isNew);
  }

  return (
    <LoginContainer>
      <Content>
        {!isNew && (
          <>
            <Separator>Sign In</Separator>
            <Form onSubmit={onLogin}>
              <input
                type="text"
                placeholder="Type in your e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <Button
                style={{ background: theme.button.secondary }}
                type="submit"
              >
                Enter Shop
              </Button>
            </Form>
            <ToggleButton data-testid="toggle-button" onClick={toggleIsNew}>
              New Here?
            </ToggleButton>
          </>
        )}
        {isNew && (
          <>
            <Separator>New customer?</Separator>
            <Form onSubmit={onRegister}>
              <input
                type="text"
                placeholder="Type in your name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Type in your e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <Button type="submit">Register</Button>
            </Form>
            <ToggleButton data-testid="toggle-button" onClick={toggleIsNew}>
              Already have an account?
            </ToggleButton>
          </>
        )}
      </Content>
    </LoginContainer>
  );
};
