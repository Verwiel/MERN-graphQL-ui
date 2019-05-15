import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// Components
import App from './components/Pages/App'


import * as serviceWorker from './serviceWorker'
// Apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// Route
import { BrowserRouter } from 'react-router-dom'
// Auth
import { setContext } from 'apollo-link-context'
import { AUTH_TOKEN } from './constants'



// connect to API
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// calls apollo and starts in cache memory
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// eventually only put app inbetween provider
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
serviceWorker.unregister();