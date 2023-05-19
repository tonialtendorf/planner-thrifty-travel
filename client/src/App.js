import './App.css';
import Contact from './Components/Contact'
import Activities from './Components/Activities';
import Home from './Components/Home'
import Calendar from './Components/Calendar'
import React from 'react';
import { Route, Routes } from "react-router-dom"
import './index.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Signup from './Components/Signup'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import Header from './Components/Header';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>

        <div className='nav'>
          <Navigation />
          <br />
        </div>
              <Header />
              <br/>
          <div className>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/me" element={<Profile />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/profiles/:profileId" element={<Profile />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        <div className='footer'>
          <br />
          <Footer />
        </div>
    </ApolloProvider>
  );
}



export default App;

