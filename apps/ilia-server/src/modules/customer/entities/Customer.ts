import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';

export class Customer {
  private props: ICreateCustomerDTO;

  constructor(props: ICreateCustomerDTO) {
    this.props = {
      ...props,
    };
  }

  public set name(name: string) {
    this.props.name = name;
  }
  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }
  public get email(): string {
    return this.props.email;
  }
}
