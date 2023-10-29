import{ useSelector, useDispatch }from  "react-redux";
import { getItemsInCart, setItemsInCart } from '../redux/cartSlice';
import { Header } from '../components/header';
import { CardList } from "../components/card-list";
import styled from "styled-components";


export default function Products() {
  const  itemsInCart:any = useSelector(getItemsInCart);
  const dispatch = useDispatch();

  const addItemsToCart = () => {
    dispatch(setItemsInCart(parseInt(itemsInCart) + 1))
  }

  const fakeProduct = {
    id: 1,
		title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		price: 109.95,
		description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  }

  const fakeProduct2 = {
    id: 2,
		title: "Mens Casual Premium Slim Fit T-Shirts ",
		price: 22.3,
		description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  }

  const products = [fakeProduct, fakeProduct2];

  return (
    <ProductsContainer>
      <Header />
      <CardList products={products}/>
    </ProductsContainer>
  );
}

export const ProductsContainer = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
`;