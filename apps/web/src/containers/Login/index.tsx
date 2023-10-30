import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../components/Button';
import {
  Content,
  EnterButton,
  Form,
  LoginContainer,
  Separator,
  ToggleButton,
} from './styles';
import { customerCreate, customerFindByEmail } from '../../services/Customer';
import { setCustomer } from '../../redux/customerSlice';
import { useRouter } from 'next/navigation';
import { orderFindByEmail } from '../../services/Order';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isNew, setisNew] = useState(false);
  const { push } = useRouter();

  const dispatch = useDispatch();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (email.length) {
      const customer = await customerFindByEmail({ email });
      if (customer?.props?.name) {
        const orders = await orderFindByEmail({ email });
        dispatch(setCustomer({ name: customer.props.name, email, orders }));
        push('/products');
      }
    }
  }

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    if (email.length && name.length) {
      const response = await customerCreate({ name, email });
      if (response?.props?.name) {
        dispatch(setCustomer({ name, email }));
        push('/products');
      }
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
            <Form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Type in your e-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <EnterButton onClick={() => {}} className="create-room">
                Enter Shop
              </EnterButton>
            </Form>
            <ToggleButton onClick={toggleIsNew}>New Here?</ToggleButton>
          </>
        )}
        {isNew && (
          <>
            <Separator>New customer?</Separator>
            <Form onSubmit={handleRegister}>
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
            <ToggleButton onClick={toggleIsNew}>
              Already have an account?
            </ToggleButton>
          </>
        )}
      </Content>
    </LoginContainer>
  );
};
