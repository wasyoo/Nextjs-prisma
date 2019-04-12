import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import GET_CART from '../../graphql/Client/queries/cart/getCart';
import CHANGE_CART_STATUS from '../../graphql/Client/mutations/cart/changeCartStatus';

const Nav = styled.nav`
  padding: 20px;
  box-shadow: 0px 1px 13px 0px rgba(0,0,0,0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  color: #61619E;
  font-size: 30px;
  font-variant: small-caps;
`;
const Menu = styled.div`
  color: #343a40!important;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    padding: 8px;
    font-size: 18px;
  }
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
  background-color: #61619E;
  border-color: #61619E;
  margin: 0 8px;
  :hover{
    background-color: #fff;
    color: #61619E;
    transition: all .5s;
  }
`;

const ShoppingCart = styled.div`
  color: #61619E;
  position: relative;
  font-size: 26px;
  span {
    position: absolute;
    top: -2px;
    right: -5px;
    background: #fff;
    width: 17px;
    height: 17px;
    text-align: center;
    line-height: 16px;
    font-size: 16px;
    border-radius: 50%;
    padding: 1px;
  }
`;


const Header = () => (
  <header className="header">
    <Nav>
      <Link href="/">
        <Brand>
          <i className="fas fa-shopping-basket"></i> CyberShop
        </Brand>
      </Link>
      <Menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/signin">
          <a>Connexion</a>
        </Link>
        <Mutation mutation={CHANGE_CART_STATUS} variables={{open: true}}>
        {
          (changeCartStatus) => {
            return (
              <ShoppingCart onClick={changeCartStatus}>
                <i className="fas fa-shopping-cart"></i>
                <Query query={GET_CART}>
                  {
                    ({ data }) => {
                    // console.log(data)
                    return <span>{data.cart.totalQuantity}</span>
                  }
                  }
                </Query>
              </ShoppingCart>
            )
          }
        }  
        </Mutation>
        <Link href="/register">
          <Button>Sign in</Button>
        </Link>
      </Menu>
    </Nav>
  </header>
);

export default Header;