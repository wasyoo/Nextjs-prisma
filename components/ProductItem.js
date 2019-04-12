import Link from 'next/link';
import {
  CardStyle, CardImage, CardDetails, CardTitle, CardFooter, CardPrice, CardActionBtn
} from './Styled/cardStyled';
import { Mutation } from 'react-apollo';
import ADD_ONE_ITEM from '../graphql/Client/mutations/cart/addItem';
export default ({id ,name, image, category, brand, description, price, quantity}) => (
  <CardStyle>
    <Link
      href={`/product?id=${id}&name=${name.trim().replace(/\s/g, "-")}`}
      as={`product/${name.trim().replace(/\s/g, "-")}`}
    >
      <a>
        <CardImage src={image} />
      </a>
    </Link>
    <CardDetails>
      <CardTitle>{name.length > 20 ? name.slice(0,20)+'...' : name}</CardTitle>
      <p className="description">{description.length > 100 ? description.slice(0,100)+'...' : description}</p>
      <CardFooter>
        <Mutation mutation={ADD_ONE_ITEM} variables={{ input: {__typename:'Product', id ,name, image, category, brand, description, price, quantity} }}>
          {
            (addOneItem) => {
              return <CardActionBtn onClick={addOneItem}>Ajouter Aux Panier</CardActionBtn>
            }
          }
        </Mutation>
        <CardPrice>{price+' Dinars'}</CardPrice>
      </CardFooter>
    </CardDetails>
  </CardStyle>
)