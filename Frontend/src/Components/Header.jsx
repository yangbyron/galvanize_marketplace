import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"

export default function Header(props) {

  const auth = getAuth()
  const signOutHandler = () => {
    signOut(auth).then(() => {
      alert("You have successfully signed out")
      props.setCurrentUser({})
    }).catch((error) => {
      alert("An error happened")
    })
  }

  let searchValue = ''
  const handleSearch = (e) => {
    searchValue = e.target.value
    console.log('search value is', searchValue)
  }
  const handleClick = () => {
    //get copy of old items
    const itemsName = props.allItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    props.handlesetItems(itemsName)
    console.log(itemsName)
  }

  let loginOrLogout = props.currentUser.uid ?
    (<>
      <Link to="/checkout">
        <button className='button'>Cart</button>
      </Link>
      <button className='button' onClick={signOutHandler}>Logout</button>
    </>) :
    (<Link to="/login">
      <button className='button'>Login</button>
    </Link>)

  let displayCurrentUser = props.currentUser.uid ?
    <div>Hello {props.currentUser.email}</div> :
    <div></div>

  return (
    <div className="header">
      <h1>Galvanize Marketplace</h1>
      {displayCurrentUser}
      <button className='button'>Home</button>
      <input
        placeholder='Search'
        type='text'
        id="searchBar"
        onChange={handleSearch}
      ></input>
      <button className='button' onClick={handleClick}>Search</button>
      {loginOrLogout}
    </div>
  )
}
