import Layout from '../../components/MyLayout';

import {redirectOnAuthError, checkAuthReturnData} from '../../services/auth';
import {isomorphicUnfetchData} from '../../services/api';

const Index = (props) => {
  return (
    <Layout>
      <p>This is restricted page for signed in user</p>
      <p>This is message from server: {props.message}</p>
    </Layout>
  );
};

Index.getInitialProps = async ({req, res}) => {
  try {
    const api_res = await isomorphicUnfetchData({req, route: 'api'});
    return await checkAuthReturnData({api_res, res});
  } catch (error) {
    // Implementation or Network error
    return redirectOnAuthError(res);
  }
};

export default Index;
