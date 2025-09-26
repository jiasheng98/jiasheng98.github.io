import type { NextPage, NextPageContext } from 'next';
import NextErrorComponent from 'next/error';

type ErrorProps = {
  statusCode?: number;
};

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return <NextErrorComponent statusCode={statusCode} />;
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
