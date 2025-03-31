import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';


const stripePromise  = loadStripe(
  'pk_test_51R7E15QF4TlLJlJOXgQyrp9n3XDDCeV46GtUAkW9aZKiiWRDyOKR7URsLujfFBUZ0zZ4X0vNzvbN8HxEqhRgqu6S00G02fth00'
);

function App() {
  const [,dispatch] = useStateValue();
    
    useEffect(() =>{
        // will only run once when the app component loads...
        auth.onAuthStateChanged(authuser =>{
          // console.log("the user is >>>",authuser);

          if(authuser){
            // the user just logged in / the user was logged in 
            dispatch({
              type: 'SET_USER',
              user: authuser

            })

          }else{
            // the user is logged out
            dispatch({
              type: 'SET_USER',
              user: null
              })
          }

        })

    }, [dispatch])// it lodes only ones in the app component

  return (

    // BEM convention
    <Router>
      <div className="App">
        <Routes> 
        <Route path="/orders" 
              element={
              <>
                  <Header />
                  <h1>Your Orders :</h1>
                  <hr/>
                  {/* <Orders /> */}
              </>}
              />

        <Route path="/login" 
              element={
              <>
                  <Login />
              </>}
              />
          <Route path="/checkout" 
              element={
              <>
              <Header />
              <Checkout />
              </>}
              />
          <Route path="/payment" 
              element={
              <>
                 <Header />
                 <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
                
                 {/* <h1> I am checkout page</h1> */}
              </>}
              />
          <Route path="/" 
              element={
              <>
              <Header />
              <Home />
              </>} 
              />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

