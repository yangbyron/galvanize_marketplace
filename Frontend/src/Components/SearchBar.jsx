import React from 'react'



export default function SearchBar({items,searchInput}) {
    let searchResult = ''
    const itemsName = items.map((items) => {
        if (searchInput == items.name) {
            console.log('this is the search', items.name)
            searchResult = items.name
          }
        
    })
  return (
    <div>SearchBar
        
    </div>
  )
}
