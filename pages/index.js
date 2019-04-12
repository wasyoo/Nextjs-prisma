import Layout from '../components/Layout';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ProductItem from '../components/ProductItem';
import { CardContainerStyle } from '../components/Styled/cardStyled';

const getProduct =gql`
 {
  products{
    id
    name
    description
    price
    quantity
    image
    category {
      name
    }
    brand {
      name
    }
  }
}
`;

const Index = () => (
  <Layout>
    <Query query={getProduct}>
    {({data, loading}) => {
      if (loading) {
        <h1>Chargement...</h1>
      }
      if (data.products){
          return (
            <CardContainerStyle>
              {
                data.products.map(product => (
                  <ProductItem key={product.id} {...product} />
                ))
              }
            </CardContainerStyle>
          )
      }
      return <p>{'Il n\'y a pas de produit pour le moment'}</p>;
    }}
    </Query>
  </Layout>
)

export default Index;