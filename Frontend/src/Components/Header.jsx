import React from 'react'

export default function Header(props) {
  //Header *
  //Category sidebar
  //Item mainbar

  return (
    <div id='Header'>
      <h1>Galvanize Marketplace</h1>
      <button>Home</button>
      <input placeholder='Search' type='text' id="searchBar"></input>
      <button>Search</button>
      <button onClick={props.click}>Login</button>
    </div>
  )
}
