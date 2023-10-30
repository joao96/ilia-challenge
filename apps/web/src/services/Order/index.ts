import axios, { AxiosResponse } from 'axios';
import { Order } from '../../shared/modules/Order';
import { Product } from '../../shared/types';

interface CreateProps {
  products: Product[];
  email: string;
}

interface FindByEmailProps {
  email: string;
}

const API_BASE_URL = '/api/order';

// fix this
async function makeRequest<T>(request: Promise<AxiosResponse<T>>) {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    return undefined;
  }
}

// handle errors and validate props
export async function orderCreate(
  props: CreateProps,
): Promise<Order | undefined> {
  const items = props.products.map((product) => product.title);
  const value = props.products.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const body = {
    items,
    value,
    shippingAddress: 'home',
    paymentMethod: 'credit_card',
    email: props.email,
  };
  const request = axios.post(`${API_BASE_URL}/create`, body);
  return makeRequest(request);
}

export async function orderFindByEmail({
  email,
}: FindByEmailProps): Promise<Order[] | undefined> {
  const request = axios.get(`${API_BASE_URL}/findByEmail`, {
    params: { email },
  });
  return makeRequest(request);
}
