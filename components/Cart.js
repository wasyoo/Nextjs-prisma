import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import GET_CART_STATUS from '../graphql/Client/queries/cart/getCartStatus';
import CHANGE_CART_STATUS from '../graphql/Client/mutations/cart/changeCartStatus';
import GET_CART from '../graphql/Client/queries/cart/getCart';
import CartItem from './CartItem';


const FloatCartContent = styled.div`
  display: ${({open}) => open ? 'block': 'none' };
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  position: fixed;
  touch-action: none;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

const FloatCart = styled.div`
  width: ${({open}) => open ? '50vw': '0vw' };
  height: 100%;
  position: fixed;
  overflow: scroll;
  top:0;
  right:0;
  background: #61619E;
  transition: all .2s;
  z-index: 2;
`;

const FloatCartContaint = styled.div`

`;

const CartHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`

const CartClose = styled.div`
  cursor: pointer;
  i {
    font-size: 30px;
    color: #fff;
  }
`

const CartTitle = styled.strong`
  font-size: 25px;
  color: #fff;
`;

const ShoppingCart = styled.div`
  color: #fff;
  position: relative;
  font-size: 26px;
  span {
    position: absolute;
    top: -10px;
    left: 13px;
    background: #fff;
    width: fit-content;
    text-align: center;
    line-height: 16px;
    font-size: 16px;
    border-radius: 20%;
    padding: 1px 5px;
    color: #61619E;
  }
`;

const CartMain = styled.div`

`

const CartFooter = styled.div`
  background: #61619E;
  border: 1px solid red;
  position: sticky;
  right:0;
  bottom: 0;
  width: 100%;
  padding: 20px;
`

class Cart extends Component {

  changeStatusCart = (open, changeCartStatus) => {
    changeCartStatus ({
      variables: {
        open
      }
    })
  }

  render(){
    return(
      <Query query={GET_CART_STATUS}>
      {
        ({data}) => {
          return (
            <Mutation mutation={CHANGE_CART_STATUS}>
            {
              (changeCartStatus) => (
                <>
                <FloatCartContent
                  open={data.cartStatus.open}
                  onClick={() => this.changeStatusCart(false,changeCartStatus)}
                />
                <FloatCart open={data.cartStatus.open}>
                <FloatCartContaint>
                  <CartHeader>
                    <CartClose onClick={() => this.changeStatusCart(false,changeCartStatus)}>
                      <i className="fas fa-times"></i>
                    </CartClose>
                    <CartTitle>
                      Panier
                    </CartTitle>
                    <ShoppingCart onClick={changeCartStatus}>
                      <i className="fas fa-shopping-cart"></i>
                      <Query query={GET_CART}>
                        {
                          ({ data }) => {
                            return <span>{data.cart.totalQuantity}</span>
                          }
                        }
                      </Query>
                    </ShoppingCart>
                  </CartHeader>
                  <CartMain>
                    <Query query={GET_CART}>
                      {
                        ({ data }) => {
                          if (data.cart.items.length) {
                            return data.cart.items.map(item => <CartItem item={item}/>)
                          }
                          return <div>Panier Vide</div>
                        }
                      }
                    </Query>
                  </CartMain>
                  <CartFooter>
                    <p>qsdqsdqsds</p>
                  </CartFooter>
                </FloatCartContaint>
                </FloatCart>
                </>
              )
            }
            </Mutation>
          )
        }
      }
      </Query>
      
    )
  }
}

export default Cart;