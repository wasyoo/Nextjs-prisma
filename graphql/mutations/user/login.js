import gql from 'graphql-tag';

export default gql`
mutation LOGIN($input: loginInput){
  login(data: $input) {
    token
    user {
      firstName
      lastName
      password
    }
  }
}
`

