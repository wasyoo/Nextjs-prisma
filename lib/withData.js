import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache }  from 'apollo-boost'
import { defaultState, resolvers } from '../graphql/Client/resolvers';

export default withApollo(() => (
  new ApolloClient({
    uri: 'http://localhost:8000/',
    cache: new InMemoryCache(),
    clientState: {
      defaults :defaultState,
      resolvers
    }
  })
))