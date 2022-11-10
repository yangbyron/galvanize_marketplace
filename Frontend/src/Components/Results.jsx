import React, { useState, useEffect } from "react";
import Item from "./Item"

const Results = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("http://localhost:4000/api/items")
        .then((response) => response.json())
        .then((result) => {
          setItems(result);
        });
    }, []);
    
    const itemsResult = items.map(item => {
       return <Item key={item.item_id} item={item} />
    })
    
    return (
        <div id="Results">
            {itemsResult}
        </div>);
}

export default Results;