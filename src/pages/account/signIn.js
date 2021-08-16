import Layout from '../../components/MyLayout';
import {handleSignIn} from '../../services/auth';

const SignIn = ({message}) => {
  return (
    <Layout>
      <p>Sign In Page</p>
      <button onClick={handleSignIn}>Sign In</button>
    </Layout>
  );
};

export default SignIn;
