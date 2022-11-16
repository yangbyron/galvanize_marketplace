import React, { useState } from 'react'

export default function Header(props) {
  //Header *
  //Category sidebar
  //Item mainbar
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
      <button className='button' onClick={props.click}>Login</button>
    </div>
  )
}