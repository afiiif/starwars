import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { useApollo } from '../lib/apollo';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
