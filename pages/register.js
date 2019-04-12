import { Mutation } from 'react-apollo';
import REGISTER from '../graphql/mutations/user/register';
import UserForm from '../components/UserForm';
import Layout from '../components/Layout';

const Register = () => (
  <Layout>
    <h1> S&apos;inscrire </h1>
    <Mutation mutation={REGISTER}>
    {(Register,{data, loading, error}) => (
      <UserForm onSubmit={Register}/>
    )}
    </Mutation>

  </Layout>
);

export default Register;
