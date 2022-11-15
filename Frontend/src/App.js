import React, { useState, useEffect } from 'react'
import FilterBar from "./Components/FilterBar";
import Header from "./Components/Header";
import Results from "./Components/Results";
import Login from "./Components/Login";
import SearchBar from './Components/SearchBar';

function App() {
  //the items state stores all of the information from the fetch call and the data is used to render all of the items
  const [items, setItems] = useState([]);
  //the filterBy state is an object that stores all of the categories that the items object can be filtered by
  //the user can only filter by one "category" at a time
  //the user can only filter by one "priceRange" at a time
  //the user can filter by both "category" and "priceRange" at the same time
  const [filterBy, setFilterBy] = useState({category: "", priceRange: ""})
  const [searchInput,setSearchInput] = useState('')
  const [loginClick,setLoginClick] = useState(false);
  function handleLoginClick(){
    setLoginClick(!loginClick);
  }

  //this fetch call grabs all of the items in the database and sets that array of objects = to the items state variable
  useEffect(() => {
    fetch("http://localhost:4000/api/items")
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  
  return (
    <div className="app">
    {loginClick?<Login whenuserisclicking={() => {handleLoginClick()
      }}/>:<><Header click={()=>{handleLoginClick()} }setSearchInput={setSearchInput} searchInput={searchInput}/>
      <FilterBar setFilterBy={setFilterBy} filterBy={filterBy}/>
      <Results items={items} filterBy={filterBy}/></>}
      <SearchBar items={items} searchInput={searchInput}/>
    </div>
  );
}

export default App;
