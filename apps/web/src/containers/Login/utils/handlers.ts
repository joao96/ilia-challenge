import {
  customerCreate,
  customerFindByEmail,
} from '../../../services/Customer';
import { orderFindByEmail } from '../../../services/Order';

export async function handleLogin(email: string) {
  if (email.length) {
    const customer = await customerFindByEmail({ email });
    if (customer?.props?.name) {
      const orders = await orderFindByEmail({ email });
      return { name: customer.props.name, email, orders };
    }
    return undefined;
  }
}

export async function handleRegister(email: string, name: string) {
  if (email.length && name.length) {
    const customer = await customerCreate({ name, email });
    if (customer?.props?.name) {
      return customer;
    }
    return undefined;
  }
}
