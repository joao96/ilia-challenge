import { Login } from '../containers/Login';
import styled from 'styled-components';
import { NextPageWithLayout } from '../shared/types/page';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getCustomer } from '../redux/customerSlice';

const Home: NextPageWithLayout = () => {
  const { push } = useRouter();
  const data = useSelector(getCustomer);

  useEffect(() => {
    const { email } = data;
    if (email) {
      push('/products');
    }
  }, []);

  return (
    <HomeContainer>
      <Aside>
        <strong>Welcome to FashionHub</strong>
        <p>
          FashionHub is your one-stop online destination for all things fashion
        </p>
      </Aside>
      <Login />
    </HomeContainer>
  );
};

export const HomeContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

const Aside = styled.aside`
  flex: 7;

  background: #44c8f5;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  strong {
    font:
      700 3.6rem 'Poppins',
      sans-serif;
    line-height: 4.2rem;
    margin-top: 16px;
  }

  p {
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-top: 16px;
    color: #f8f8f8;
  }

  @media (max-width: 900px) {
    flex: 4;
    padding: 40px 40px;
    strong {
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 720px) {
    position: absolute;
    width: 100%;
    height: 50px;
    text-align: center;

    strong {
      font-size: 20px;
    }

    p {
      display: none;
    }
  }
`;

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Home;
