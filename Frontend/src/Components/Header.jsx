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
    (<div className="topRightCorner">
      <Link to="/checkout">
        <button className='headerbutton'>Cart</button>
      </Link>
      <button className='headerbutton' onClick={signOutHandler}>Logout</button>
    </div>) :
    (<Link to="/login" className='setOrange'>
      <button className='headerbutton'>Login</button>
    </Link>)

  let displayCurrentUser = props.currentUser.uid ?
    <div className='topLeftCorner'>Hello {props.currentUser.email}</div> :
    <div className='setOrange'></div>

  return (
    <>
      {displayCurrentUser}
      <div className="header">
        <h1 className='galMar'>Galvanize Marketplace</h1>
        <button className='headerbutton' onClick={handleClick}>Search</button>
        <input
          placeholder='🔎 Search '
          type='text'
          id='searchBar'
          onChange={handleSearch}
        ></input>
      </div>
      {loginOrLogout}
    </>
  )
}
