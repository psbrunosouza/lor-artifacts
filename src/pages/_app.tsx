import '../../styles/globals.scss';
import 'keen-slider/keen-slider.min.css';

import type { AppProps } from 'next/app';
import client from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
