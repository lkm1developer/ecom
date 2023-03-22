import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Homepage from './pages/Homepage';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
