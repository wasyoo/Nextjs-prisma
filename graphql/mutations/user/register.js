import gql from 'graphql-tag';

const REGISTER = gql`
mutation Register($data: UserCreateInput!) {
  createUser(data:$data) {
    token
    user {
      id
      firstName
      lastName
      email
      avatar
      address
      phone
      role
      typeOfAuth
    }
  }
}
`;

export default REGISTER;