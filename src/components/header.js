import Link from "next/link";

import { handleSignIn, handleSignOut } from '../services/auth';

export default () => {
  return (
    <>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/account/signin">
        <a>Signin Page</a>
      </Link>
      <Link href="/account">
        <a>Account Page</a>
      </Link>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};
