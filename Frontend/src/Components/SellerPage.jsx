import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import { getAuth, signOut } from "firebase/auth"

const SellerPage = (props) => {
    const auth = getAuth()
    const signOutHandler = () => {
      signOut(auth).then(() => {
        alert("You have successfully signed out")
        props.setCurrentUser({})
      }).catch((error) => {
        alert("An error happened")
      })
    }
    
    const[list, setList] = useState("")
    return (
    <div>
    <AddItemForm setList={setList}/>
   {list}
   <button className='button' onClick={signOutHandler}>Logout</button>
    </div>
    )
}

export default SellerPage;