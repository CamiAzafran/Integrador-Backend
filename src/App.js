import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './components/Navbar/Navbar';

import { Order } from './components/Orders/Order';

import { useOpenFood } from './hooks/useOpenFood';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  const opendFood = useOpenFood();

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />

      <Routes>
        <Route exact path="/" element={<Home opendFood={opendFood} />}></Route>

        <Route path="/Checkout" element={<Checkout />}></Route>
        
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
