// from https://www.apollographql.com/docs/react/get-started/
import { ApolloClient } from '@apollo/client';
import cache from './cache';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache,
});

export default client;
