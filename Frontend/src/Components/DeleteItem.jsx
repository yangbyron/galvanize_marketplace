import React from "react";
 const DeleteItem = ({ itemId, update, setUpdate }) => {
    let clickHandler = () => {
        fetch(`http://localhost:4000/api/deleteItems/${itemId}`, {
            method: "DELETE",
          })
          .then(() => {
            setUpdate(!update)
          })
          console.log("Deleted Item Id#", itemId);

    }
    return (
        <button onClick={clickHandler}>
            DELETE
        </button>
    )
 }

 export default DeleteItem;