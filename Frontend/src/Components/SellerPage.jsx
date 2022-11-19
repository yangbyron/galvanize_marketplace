import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import { getAuth, signOut } from "firebase/auth"
import SellerList from "./SellerList";

const SellerPage = (props) => {

  const [update, setUpdate] = useState(false)
  
    const auth = getAuth()
    const signOutHandler = () => {
      signOut(auth).then(() => {
        alert("You have successfully signed out")
        props.setCurrentUser({})
      }).catch((error) => {
        alert("An error happened")
      })
    }

    return (
      <>
        <div className="header">
          <h1>Galvanize Marketplace Seller Page</h1>
        </div>  
        <AddItemForm currentUser={props.currentUser} update={update} setUpdate={setUpdate} />
        <div className="topRightCorner">
          <button className='button' onClick={signOutHandler}>Logout</button>
        </div>
        <SellerList currentUser={props.currentUser} update={update} setUpdate={setUpdate}/>
      </>
    )
}

export default SellerPage;