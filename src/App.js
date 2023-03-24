import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CollectionsOverview from './components/collections-overview/collections-overview.component';
import CollectionPage from './pages/Collection';
import Checkout from './pages/checkout';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


const App = () => {

  return (
    <div style={{margin:'0px 100px'}}>
        <Header />
        <Routes>
          <Route path='shop/:collectionId' element={<CollectionPage />} />
          <Route path="shop" element={<CollectionsOverview />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
          <Route path="/" index element={<Homepage />} />
          <Route path="*" index element={<Homepage />} />
        </Routes>
      
    </div>
  );
}

export default App;
