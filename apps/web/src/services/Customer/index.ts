import axios, { AxiosResponse } from 'axios';
import { Customer } from '../../shared/modules/Customer';

interface CreateProps {
  name: string;
  email: string;
}

interface FindByEmailProps {
  email: string;
}

const API_BASE_URL = '/api/customer';

// fix this
async function makeRequest<T>(request: Promise<AxiosResponse<T>>) {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    return undefined;
  }
}

// handle errors and add return types for each function
export async function customerCreate(
  props: CreateProps,
): Promise<Customer | undefined> {
  const request = axios.post(`${API_BASE_URL}/create`, props);
  return makeRequest(request);
}

export async function customerFindAll(): Promise<Customer[] | undefined> {
  const request = axios.get(`${API_BASE_URL}/findAll`);
  return makeRequest(request);
}

export async function customerFindByEmail({
  email,
}: FindByEmailProps): Promise<Customer | undefined> {
  const request = axios.get(`${API_BASE_URL}/findByEmail`, {
    params: { email },
  });
  return makeRequest(request);
}
