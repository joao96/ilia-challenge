export interface CustomerProps {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
}

export class Customer {
  private props: CustomerProps;

  constructor(props: CustomerProps) {
    this.props = {
      ...props,
    };
  }
}
