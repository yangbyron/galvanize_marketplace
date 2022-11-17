import React from "react";

const Item = ({ item, addToCart }) => {
  let name = item.name;
  let description = item.description;
  let price = item.price;
  let image_path = item.image_path;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image_path} alt={image_path}></img>
      <p>{description}</p>
      <div>{`$${price}`}</div>
      <button onClick={() => { addToCart(item.item_id) }}>Add to Cart</button>
    </div>
  );
};

export default Item;
