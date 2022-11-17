import React,{useState} from 'react'

function CheckoutPage(props) {
  //pass cart into the return and render it to the page
  //pull from the items DB-cart table, 
  
  console.log('checkoutpage props ', props)
  const handleRemoveItem = (e) => {
    let removeCartItemObj = {
      user_id: props.currentUser.uid,
      item_id: e.target.value
    }
    //remove from the items DB cart Table
    fetch('http://localhost:4000/api/cart/',{
      method:'DELETE',
      headers:{'Content-Type':'Application/JSON'},
      body:JSON.stringify(removeCartItemObj)
    })
    .then(props.renderCheckoutPage)
    //delete the element
    console.log("item wouldve been removed")
  } 
  return (
    <div id='displayCart'>{
      props.cart.map((item) => {
        return (
        <div key={item.item_id}> {item.name}<img src={item.image_path}/>{item.price} 
        <button onClick={handleRemoveItem} value={item.item_id}>Remove Item</button>
        </div>
        )
      })
    }</div>
  
  )
}

export default CheckoutPage