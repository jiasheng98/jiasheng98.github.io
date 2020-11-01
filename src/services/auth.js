import { isomorphicUnfetchData } from '../utils/api';

import Router from "next/router";

export const handleSignOut = async e => {
  e.preventDefault();
  await isomorphicUnfetchData({ route: 'api/signout', method: 'POST', body: { name: 123 }});
  Router.push('/');
};

export const handleSignIn = async e => {
  e.preventDefault();
  await isomorphicUnfetchData({ route: 'api/signin', method: 'POST', body: { name: 123 }});
};

export const redirectOnAuthError = (res) => {
  if (typeof window !== "undefined") {
    Router.push("/account/signin");
    return {}
  } else {
    res.writeHead(302, { Location: '/account/signin' })
    res.end();
    return {}
  }
};

export const checkAuthReturnData = async ({api_res, res}) => {
  if (api_res.ok) {
    const json = await api_res.json();
    //get and save user info on redux
    return json;
  } else {
    // https://github.com/developit/unfetch#caveats
    return redirectOnAuthError(res);
  }
}
