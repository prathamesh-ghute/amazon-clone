import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';




function App() {
  const [,dispatch] = useStateValue();
    
    useEffect(() =>{

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

