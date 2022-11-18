import React from "react";

const Item = ({ item }) => {
  let name = item.name;
  let description = item.description;
  let price = item.price;
  let image_path = item.image_path;

  return (
    <div className="item">
      <h2>{name}</h2>
      <img className='img' src={image_path}></img>
      <p>{description}</p>
      <div>{`$${price}`}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Item;
