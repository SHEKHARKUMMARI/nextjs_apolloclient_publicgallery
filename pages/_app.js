import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Layout from '../components/Layout';

const client = new ApolloClient({
  uri: 'http://localhost:3333/api/graphql',
  cache: new InMemoryCache()
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ ApolloProvider >
    
  )
}
export default MyApp
