import React from 'react'
import Item from './Item'
import Results from './Results'



export default function SearchBar({items,searchInput}) {
    let searchResult = ''
    const itemsName = items.map((items) => {
        
        if (searchInput == items.name) {
            console.log('this is the search', items.name)
            searchResult = items.name
            return (
                render (
                    <div className="results">{items}</div>

                )
            
            )
          }
        
    })
  return (
    <div>SearchBar
        
    </div>
  )
}
