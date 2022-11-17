import React, { useState, useEffect } from 'react'
import {unstable_batchedUpdates} from 'react-dom'
import FilterBar from "./Components/FilterBar";
import Header from "./Components/Header";
import Results from "./Components/Results";
import Login from "./Components/Login";
import Register from './Components/Register';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  //the filterBy state is an object that stores all of the categories that the items object can be filtered by
  //the user can only filter by one "category" at a time
  //the user can only filter by one "priceRange" at a time
  //the user can filter by both "category" and "priceRange" at the same time
  //the items state stores all of the information from the fetch call and the data is used to render all of the items
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([])
  const [filterBy, setFilterBy] = useState({category: "", priceRange: ""});
  const [registerClick,setRegisterClick]=useState(false);
  const [loginClick,setLoginClick] = useState(false);
  const [currentUser,setCurrentUser]=useState({});
  const [allItems,setAllItems] = useState([]) 
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
    .then(fetch('http://localhost:4000/api/cart/'+ currentUser.uid) 
      .then((result) => result.json())
      .then((data) => setCart(oldCart => [data]))
      .then(console.log(cart)))
  }

  function handleLoginClick(){
    setLoginClick(!loginClick);
  }
  const handlesetItems = (input) =>{
    setItems(input)
  }
  function handleRegisterClick(){
    setRegisterClick(!registerClick);
  }
  //this fetch call grabs all of the items in the database and sets that array of objects = to the items state variable
  useEffect(() => {
    fetch("http://localhost:4000/api/items")
      .then((response) => response.json())
      .then((result) => {
        setItems(result)
        setAllItems(result);
      });
  }, []);

  function handleChangeCurrentUser(user){
    setCurrentUser(oldUser=>user);
  }
  //   } else {
  //     useEffect(()=>{
  //       handleLoginClick()
  //       handleRegisterClick()//get these to run before the page renders 
  //       setCurrentUser({})
  //     },[]) 
  //   }
  // }
  function registerUser(email,password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      handleChangeCurrentUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
  }
  return (
    <div className="app">

    {currentUser.uid?<><div>Hello {currentUser.email}</div><Header logout={handleChangeCurrentUser} currentUser={currentUser} click={()=>{handleLoginClick()}} handlesetItems={handlesetItems} allItems={allItems}/>
      <FilterBar setFilterBy={setFilterBy} filterBy={filterBy}/>
      <Results addToCart={addToCart} items={items} filterBy={filterBy}/></>:registerClick?<Register registerUser={(email,password)=>registerUser(email,password)} cancel={()=>{handleRegisterClick()}}/>:loginClick?<Login clickRegister={()=>{handleRegisterClick()}} whenuserisclicking={()=>{handleLoginClick()
      }}/>:<><Header click={()=>{handleLoginClick()}} handlesetItems={handlesetItems} allItems={allItems}/>
      <FilterBar setFilterBy={setFilterBy} filterBy={filterBy}/>
      <Results items={items} filterBy={filterBy}/></>}
    </div>
  );
}

export default App;