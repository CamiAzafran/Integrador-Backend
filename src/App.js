import React, {useEffect} from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './components/Navbar/Navbar';

import { Order } from './components/Orders/Order';

import { useOpenFood } from './hooks/useOpenFood';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Resume from './pages/Resume';
import Orders from './pages/Orders';

import { useSelector, useDispatch } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import * as userActions from './redux/user/user-actions';

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot) => {
        cb(action({ id: snapShot.id, ...snapShot.data() }));
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const opendFood = useOpenFood();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => {
      unsubcribe();
    };
  }, [dispatch]);


  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />

      <Routes>
        <Route exact path="/" element={<Home opendFood={opendFood} />}></Route>

        <Route path="/Checkout" element={<Checkout />}></Route>
        
        <Route path="/login" element={<Login />}></Route>


        <Route exact path="/mis-ordenes" element={<Orders/>}>
          
        </Route>
        <Route exact path={`/mis-ordenes/:orderId`} element={<Resume/>}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
