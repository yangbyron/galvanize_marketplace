import React, { useState } from 'react'

export default function Header(props) {
  //Header *
  //Category sidebar
  //Item mainbar
  let searchValue = ''
  const handleSearch = (e) => {
    searchValue = e.target.value
  }
  const handleClick = () => {
    //get copy of old items
    const itemsName = props.allItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    props.handlesetItems(itemsName)
  }
  return (
    <div className="header">
      <h1>Galvanize Marketplace</h1>
      <button className='button'>Home</button>
      <input
        placeholder='Search'
        type='text'
        id="searchBar"
        onChange={handleSearch}
      ></input>
      <button className='button' onClick={handleClick}>Search</button>
       {props.currentUser ? <div><button className='button' >Cart</button> <button className='button' onClick={props.logout}>Logout</button></div>   : <button className='button' onClick={props.click}>Login</button>}
    </div>
  )
}