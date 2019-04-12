import styled from 'styled-components';
import ReactImageMagnify from 'react-image-magnify';

const ProductContaint = styled.div`
  display: flex; 
`

const ProductImage = styled.div`
  width: 40%;
  padding: 20px;
`

const ProductDetails = styled.div`
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  * {
    margin-bottom: 20px;
  }
`

const Availability = styled.span`
  color: ${props => props.availble ? 'green' : 'red'};
`

const Price = styled.span`

`

export default ({name, description, image, price, quantity, category, brand}) => (
  <ProductContaint>
    <ProductImage>
      <ReactImageMagnify
        style={{zIndex: 1000}}
        {...{
          smallImage: {
            alt: name,
            isFluidWidth: true,
            src: image,
          },
          largeImage: {
            src: image,
            width: 1200,
            height: 1800,
          },
        }}
      />
    </ProductImage>
    <ProductDetails>
      <h1>
        {name}
      </h1>
      <p>
      {description}
      </p>
      <Price>
        {`${price} Dinars`} 
      </Price>
      <strong>
        {quantity > 0 ? (<Availability availble>Disponible</Availability>) : (<Availability availble={false}>EPUISE</Availability>)}
      </strong>
    </ProductDetails>
  </ProductContaint>
)