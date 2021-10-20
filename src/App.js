import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import PokeHeader from './components/PokeHeader/PokeHeader';


import './App.scss';

const App = () => {
  return (
    <HashRouter>
        <PokeHeader />
        <AppRouter />
    </HashRouter>
  )
}

export default App;
