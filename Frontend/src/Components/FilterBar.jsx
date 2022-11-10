import React, { useState } from 'react'

export default function FilterBar() {
  let categoryList = ["Books", "Electronics", "Outdoor"]
  const [selectedCategory, setSelectedCategory] = useState("");
  // let clickHandler = () => {
  //   setCategoryList(category.map(category => {
  //     return <li>{category}</li>
  //   }))
  // }

  let result = categoryList.map((category) => {
    return <li><button onClick={() => {setSelectedCategory({category})}}>{category}</button></li>
  })
    
  return (
    <div id='FilterBar' >
    <button >Filter By Categories</button>
    <ul>{result}</ul>
  </div>
  )
}
