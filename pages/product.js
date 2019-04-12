import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from '../components/Layout';
import Product from '../components/Product';

const GET_PRODUCT = gql`
  query GetProduct($id: ID!){
    product(where: { id: $id }) {
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

const Item = ({query}) => (
  <Layout>
    <Query query={GET_PRODUCT} variables={{ id: query.id }}>
    {({data, loading}) => {
       if (loading) {
        <h1>Chargement...</h1>
      }
      if (data){
        return  <Product {...data.product}/>
      }
      return null
    }}
    </Query>
  </Layout>
)

Item.getInitialProps = async ({ query }) => {
  return { query }
}


export default Item;