import React, { useState, useEffect } from "react";
import Item from "./Item";
//loads the results from filtering with the buttons.
const Results = ({ items, filterBy }) => {
  //mapping through the items and filtering by the useState info.
  const itemsResult = items.map((item) => {
    if (filterBy.category == item.category || filterBy.category === "") {
      //match the category to the item's category Or if the category is empty.
      switch (filterBy.priceRange) {
        //if the filters price range is equivalent to the case execute case code, each case follows this pattern.
        case "":
          //return the item with a corresponding id and set item equal to the Js object it
          return <Item key={item.item_id} item={item} />;
          break;
        case "$0-$50":
          //if the price range is between $0 and $50 execute case code.
          if (item.price <= 50) {
            //checking if item price is below $50 and if it is return the item.
            return <Item key={item.item_id} item={item} />;
          }
          break;
        case "$50-$100":
          if (item.price >= 50 && item.price <= 100) {
            return <Item key={item.item_id} item={item} />;
          }
          break;
        case "$100-$1000":
          if (item.price >= 100 && item.price <= 1000) {
            return <Item key={item.item_id} item={item} />;
          }
          break;
        case "> $1000":
          if (item.price >= 1000) {
            return <Item key={item.item_id} item={item} />;
          }
          break;
        default:
          return;
      }
    }
  });
  //return the results div containing all the items that match the case requirements, which are specified by the filter buttons.
  return <div className="results">{itemsResult}</div>;
};

export default Results;
