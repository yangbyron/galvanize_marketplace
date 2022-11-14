import React, { useState } from 'react'

export default function FilterBar({ setFilterBy }) {
  let categoryList = ["Books", "Electronics", "Outdoor"]

  let result = categoryList.map((category) => {
    return <li><button onClick={() => {setFilterBy(category)}}>{category}</button></li>
  })
    
  return (
    <div id='FilterBar' >
    <button >Filter By Categories</button>
    <ul>{result}</ul>
  </div>
  )
}
