import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/Pages/App';
import Login from './components/Forms/Login'
import PhotoHome from './components/Pages/PhotoHome'
import AddBlog from './components/Forms/AddBlog'

import * as serviceWorker from './serviceWorker';
// Apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// connect to API
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// calls apollo and starts in cache memory
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <Login />
    <PhotoHome />
    <AddBlog />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();