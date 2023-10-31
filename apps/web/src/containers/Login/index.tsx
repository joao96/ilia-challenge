import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import {
  Content,
  ErrorMessage,
  Form,
  Input,
  LoginContainer,
  Separator,
  ToggleButton,
} from './styles';
import { setCustomer } from '../../redux/customerSlice';
import { useRouter } from 'next/router';
import { handleLogin, handleRegister } from './utils/handlers';
import { useTheme } from 'styled-components';
import toast from 'react-hot-toast';
import { validateLogIn, validateSignIn } from './utils/validator';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isNew, setisNew] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
  });
  const { push } = useRouter();
  const theme = useTheme();

  const dispatch = useDispatch();

  async function onLogin(e: FormEvent) {
    e.preventDefault();
    const validationErrors = await validateLogIn({ email });
    if (!validationErrors) {
      const customer = await handleLogin(email);
      if (customer) {
        setErrors({ name: '', email: '' });
        const { email: customerEmail, name, orders } = customer;
        toast.success(`Hello ${name}! Welcome to the shop.`);
        dispatch(
          setCustomer({ name, email: customerEmail, orders: orders || [] }),
        );
        push('/products');
      } else {
        toast.error(`Could not find your credentials, try again.`);
        setEmail('');
        setName('');
      }
    } else {
      setErrors(validationErrors);
    }
  }

  async function onRegister(e: FormEvent) {
    e.preventDefault();
    const validationErrors = await validateSignIn({ email, name });
    if (!validationErrors) {
      const customer = handleRegister(email, name);
      if (customer) {
        setErrors({ name: '', email: '' });
        dispatch(setCustomer({ name, email }));
        push('/products');
        toast.success(`Hello ${name}! Welcome to the shop.`);
      } else {
        toast.error(`Something went wrong while creating your account.`);
      }
    } else {
      setErrors(validationErrors);
    }
  }

  function toggleIsNew() {
    setErrors({ name: '', email: '' });
    setisNew(!isNew);
  }

  return (
    <LoginContainer>
      <Content>
        {!isNew && (
          <>
            <Separator>Sign In</Separator>
            <Form onSubmit={onLogin}>
              <Input
                type="text"
                placeholder="Type in your e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                error={!!errors?.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              <Button
                style={{ background: theme.button.primary }}
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
              <Input
                type="text"
                placeholder="Type in your name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                error={!!errors?.name}
              />
              {errors?.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              <Input
                type="text"
                placeholder="Type in your e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                error={!!errors?.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
