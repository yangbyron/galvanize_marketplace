import React,{useState} from 'react'

export default function Header() {
   //Header *
   //Category sidebar
   //Item mainbar
   const [searchInput,setSearchInput] = useState('')
   const handleSearch = event => {
      setSearchInput(event.target.value)
      console.log('search value is',searchInput)
   }
  return (
      <div className="header">
        <h1>Galvanize Marketplace</h1>
        <button className='button'>Home</button>
        <input
        placeholder='Search' 
        type='text' 
        id="searchBar"
        ></input> 
        <button className='button'onClick={handleSearch}>Search</button>
        <button className='button'>Login</button>
      </div>
  )
}
