import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import PokeHeader from './components/PokeHeader/PokeHeader';


import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <PokeHeader />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
