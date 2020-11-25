import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
import './App.css';

const promise = loadStripe('pk_test_51HgPxFJS37lJ6zOVHeeyFVed5eakQOjQYMXaQN2Gjl8Y81Zzykl9MsZ808IQ9eGUnbxmj7khLMmmJacFUF2eOOm700usu02enB');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    firebase.auth().onAuthStateChanged(authUser => {
      console.log(`the user is >>>>>`, authUser);
      if(authUser) {
        //the user just logged in . the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })



  }, [])
  

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
             
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
