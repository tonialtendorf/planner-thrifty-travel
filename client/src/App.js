import './App.css';
import Contact from './Components/Contact'
import Activities from './Components/Activities';
import Home from './Components/Home'
import Calendar from './Components/Calendar'
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { Route, Routes } from "react-router-dom"
import './index.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});



function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  </>
  );
}


export default App;
