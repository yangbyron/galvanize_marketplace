import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import FilterBar from "./Components/FilterBar";
import Results from "./Components/Results";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CheckoutPage from "./Components/CheckoutPage";
import SellerPage from "./Components/SellerPage";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Route, Routes } from "react-router-dom";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //the items state stores all of the information from the fetch call and the data is used to render all of the items
  const [items, setItems] = useState([]);
  //the filterBy state is an object that stores all of the categories that the items object can be filtered by
  //the user can only filter by one "category" at a time
  //the user can only filter by one "priceRange" at a time
  //the user can filter by both "category" and "priceRange" at the same time

  const [filterBy, setFilterBy] = useState({category: "", priceRange: ""});
  const [currentUser,setCurrentUser]=useState({});
  const [allItems,setAllItems] = useState([])
  const [cart, setCart] = useState([])
  const [isSeller, setIsSeller] = useState(false);

  const handlesetItems = (input) => {
    setItems(input);
  };

  function addToCart(newItem){
    //post request to DB to add user_id & item_id
    //get request to setCart
    const cartItems = {
      user_id:currentUser.uid,
      item_id:newItem
    }
    fetch('http://localhost:4000/api/cart',{
      method:'POST',
      headers:{'Content-Type':'Application/JSON'},
      body:JSON.stringify(cartItems)
    })
  }  
  const renderCheckoutPage  = () => {
    fetch('http://localhost:4000/api/cart/'+ currentUser.uid) 
    .then((result) => result.json())
    .then((data) => {setCart(oldCart => (data))
    })
  }
  //this fetch call grabs all of the items in the database and sets that array of objects = to the items state variable
  useEffect(() => {
    fetch("http://localhost:4000/api/items")
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
        setAllItems(result);
      });
  }, [cart]);

  function handleChangeCurrentUser(user) {
    setCurrentUser((oldUser) => user);
  }

  function registerUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      handleChangeCurrentUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
  }
  let renderBuyerOrSellerPage = isSeller ? (
    <Route path="/" element={<SellerPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
  ) : (
    <Route
      path="/"
      element={
        <>
          <Header
            handlesetItems={handlesetItems}
            allItems={allItems}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            renderCheckoutPage={renderCheckoutPage}
          />
          <FilterBar setFilterBy={setFilterBy} filterBy={filterBy} />
          <Results items={items} filterBy={filterBy} addToCart={addToCart}/>
        </>
      }
    />
  );

  return (
    <div className="app">
      <Routes>
        {renderBuyerOrSellerPage}
        <Route
          path="/login"
          element={
            <Login className='setOrange' setCurrentUser={setCurrentUser} setIsSeller={setIsSeller} />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              registerUser={(email, password) => registerUser(email, password)}
            />
          }
        />
        <Route path="/checkout" element={<CheckoutPage setCart={setCart} cart={cart} currentUser={currentUser} renderCheckoutPage={renderCheckoutPage}/>} />
      </Routes>
    </div>
  );
}

export default App;
