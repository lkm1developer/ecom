import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Homepage from './pages/Homepage';
import CollectionsOverview from './components/collections-overview/collections-overview.component';
import CollectionPage from './pages/Collection';


const App = () => {

  return (
    <div style={{margin:'0px 100px'}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='shop/:collectionId' element={<CollectionPage />} />
          <Route path="shop" element={<CollectionsOverview />} />
          <Route path="/" index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
