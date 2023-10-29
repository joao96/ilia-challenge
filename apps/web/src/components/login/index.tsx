import { Button } from '../button';
import {
  Content,
  CreateRoomButton,
  Form,
  LoginContainer,
  Separator,
} from './styles';

export const Login = () => {
  return (
    <LoginContainer>
      <Content>
        <Separator>Sign In</Separator>
        <Form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Type in your e-mail"
            onChange={() => {}}
            value={''}
          />
          <CreateRoomButton onClick={() => {}} className="create-room">
            Enter Shop
          </CreateRoomButton>
        </Form>
        <Separator>New customer?</Separator>
        <Form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Type in your name"
            onChange={() => {}}
            value={''}
          />
          <input
            type="text"
            placeholder="Type in your e-mail"
            onChange={() => {}}
            value={''}
          />
          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </LoginContainer>
  );
};
