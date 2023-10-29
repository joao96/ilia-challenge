export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating?: {
    rate?: 3.9;
    count?: 120;
  };
}
