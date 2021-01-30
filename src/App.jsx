import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import client from './Apollo/client';
import Countries from './Countries.jsx';

const App = (_props) => {
  return (
    <ApolloProvider client={client}>
      <div style={{ marginTop: 30 }}>
        <Countries />
      </div>
    </ApolloProvider>
  )
};

ReactDOM.render(<App />, document.querySelector('#app'));
