import { handleLogin, handleRegister } from './handlers';

jest.mock('../../../services/Customer', () => ({
  customerFindByEmail: jest.fn().mockResolvedValue({
    props: { name: 'Test Customer', email: 'email@test.com' },
  }),
  customerCreate: jest.fn().mockResolvedValue({
    props: { name: 'Test Customer', email: 'email@test.com' },
  }),
}));

jest.mock('../../../services/Order', () => ({
  orderFindByEmail: jest.fn().mockResolvedValue([]),
}));

describe('handleLogin', () => {
  it('should handle login with valid email', async () => {
    const result = await handleLogin('email@test.com');

    expect(result).toEqual({
      name: 'Test Customer',
      email: 'email@test.com',
      orders: [],
    });
  });

  it('should handle login with invalid email', async () => {
    const result = await handleLogin('');

    expect(result).toBeUndefined();
  });
});

describe('handleRegister', () => {
  it('should handle registration with valid data', async () => {
    const result = await handleRegister('email@test.com', 'Test Customer');

    expect(result).toEqual({
      props: {
        name: 'Test Customer',
        email: 'email@test.com',
      },
    });
  });

  it('should handle registration with invalid data', async () => {
    const result = await handleRegister('', '');

    expect(result).toBeUndefined();
  });
});
