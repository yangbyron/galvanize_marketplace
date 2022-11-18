import React,{useState} from 'react'
import { Link } from "react-router-dom";
function CheckoutPage(props) {
  //pass cart into the return and render it to the page
  //pull from the items DB-cart table, 
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
  } 
  //checkout
  //patch that changes is sold to true, clear shopping cart, 
  //delete items from the cart table,return logged in user to home.
  let subtotalPrice = 0
  let itemsCheckingOut =[]
  const handleCheckout = ()=>{
    subtotalPrice = 0
    fetch('http://localhost:4000/api/checkout',{
    method:'PATCH',
    headers: {'Content-Type':'Application/JSON'},
    body:JSON.stringify(itemsCheckingOut)
  })
  .then(fetch('http://localhost:4000/api/deleteAll',{
    method:'DELETE',
    headers:{'Content-Type':'Application/JSON'}
  })
  .then(props.setCart([]))
  )
}
  
  return (
    <div id='displayCart'>{
      props.cart.map((item) => {
        itemsCheckingOut.push(item.item_id)
        subtotalPrice += Number(item.price)
        return (
        <div key={item.item_id}> {item.name}<img src={item.image_path}/>{item.price} 
        <button className='button'onClick={handleRemoveItem} value={item.item_id}>Remove Item</button>
        </div>
        )
      })
    }
    <div>Subtotal:${subtotalPrice} <Link to='/'><button className='button' onClick={handleCheckout}>Checkout</button></Link> <Link to="/"><button className='button'>Return to Home</button></Link></div>
    </div>
  )
}

export default CheckoutPage