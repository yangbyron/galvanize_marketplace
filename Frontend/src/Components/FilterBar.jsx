import React, { useState } from 'react'

export default function FilterBar({ filterBy, setFilterBy }) {
  //showCategories is set to false. When true, it will show all categories. 
  const [showCategories, setShowCategories] = useState(false)

  // stores an array of categories
  let categoryList = ["Books", "Electronics", "Outdoor"]

  let categoryResult
  
  // the categories will only display when showCategories is set to true.
  if(showCategories){
    categoryResult = categoryList.map((categoryParam) => {
      //onClick fires the setFilterBy function that changes the category of the filterBy object.
      return <li key={categoryParam}><button onClick={() => {setFilterBy({...filterBy, category: categoryParam})}}>{categoryParam}</button></li>
    })
  }
  //showPriceRanges is set to false. When true, it will show all price ranges. 
  const [showPriceRanges, setShowPriceRanges] = useState(false)
  
  // stores an array of price ranges
  let priceRanges = ["$0-$50", "$50-$100", "$100-$1000", "> $1000"]

  let priceRangeResult

  // the prace range will only display when showPriceRanges is set to true.
  if(showPriceRanges){
    priceRangeResult = priceRanges.map((priceParam) => {
      //onClick fires the setFilterBy function that changes the price range value in the filterBy object.
      return <li key={priceParam}><button onClick={() => {setFilterBy({...filterBy, priceRange: priceParam})}}>{priceParam}</button></li>
    })
  }
    
  return (
    <div id='FilterBar' >
      <button onClick={() => {
        // toggle weather the categories are displayed or not
        setShowCategories(!showCategories)
        // changes the category value to an empty string in the filterBy object
        setFilterBy({...filterBy, category: ""})
      }}
      >
        Filter By Categories
      </button>

      <ul>{categoryResult}</ul>

      <button onClick={() => {
        // toggle weather the price ranges are displayed or not
        setShowPriceRanges(!showPriceRanges)
        // changes the price range value to an empty string in the filterBy object
        setFilterBy({...filterBy, priceRange: ""})
      }}
      >
        Filter By Price
      </button>

      <ul>{priceRangeResult}</ul>
    </div>
  )
}
