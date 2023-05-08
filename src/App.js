import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
// import Homepage from './pages/Homepage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
