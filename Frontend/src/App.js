import React, { useState, useEffect } from 'react'
import FilterBar from "./Components/FilterBar";
import Header from "./Components/Header";
import Results from "./Components/Results";

function App() {
  const [items, setItems] = useState([]);
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/api/items")
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  
  return (
    <div className="App">
      <Header />
      <FilterBar setFilterBy={setFilterBy} />
      <Results items={items} filterBy={filterBy}/>
    </div>
  );
}

export default App;
