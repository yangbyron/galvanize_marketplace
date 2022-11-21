import React, { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";


const SellerList = ({ currentUser, update, setUpdate }) => {
    
    const [sellerItems, setSellerItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/api/items/${currentUser.email}`)
          .then((response) => response.json())
          .then((result) => {
            setSellerItems(result);
          });
      }, [update]); 

    let results = sellerItems.map((item) => {
        return (
            <div>
                <h2>{item.name}</h2>
                <img src={item.image_path}></img>
                <p>{item.description}</p>
                <div>{`$${item.price}`}</div>
                <DeleteItem itemId={item.item_id} update={update} setUpdate={setUpdate}/>
            </div>
        )
    })

    console.log(results)
    
    return (
        <div className="listSellerItems">
            <div>SellerList</div>
            <div>
                {results}
            </div>
        </div>
    )
}

export default SellerList;