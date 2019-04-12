import styled from 'styled-components';

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const CartItemMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardItemImage = styled.img`
  display: flex;
  justify-content:center;
  background-image: url(${props => props.src});
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
`;

const CartItemTitle = styled.strong`
  padding: 5px 0;
`;

const CartItemInfo = styled.div`
  
`;

const CartItemQuantity = styled.div`

`


const CartItemPrice = styled.div`

`

const CartItemTotal = styled.div``

const CartItemRemove = styled.div``

export default ({item}) => (
  <CartItem>
    <CartItemMedia>
      <CardItemImage src={item.product.image}/>
    </CartItemMedia>
    <CartItemInfo>
      <CartItemTitle>{item.product.name}</CartItemTitle>
      <CartItemQuantity>Quantité: <span>{item.quantity}</span></CartItemQuantity>
      <CartItemPrice>
        Prix unitaire: 
        <span>
          {item.product.price}
        </span>
      </CartItemPrice>
    </CartItemInfo>
    <CartItemTotal>
    {item.product.price * item.quantity} DT
    </CartItemTotal>
    <CartItemRemove>
      <i className="fas fa-times"></i>
    </CartItemRemove>
  </CartItem>
)