import React from 'react'

export default function Header() {
   //Header *
   //Category sidebar
   //Item mainbar
  return (
    <div>
      <div id='Header'>
      <button>Home</button>
      <input placeholder='Search' type='text'></input> 
      <button>Login</button>
        </div>
          <div id='FilterBar' >
            <button>Categories</button>
            <button>Filter</button>
            
          </div>
          <div id='Results'>

          </div>
    </div>
    
  )
}
