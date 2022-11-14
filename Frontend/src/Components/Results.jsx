import React, { useState, useEffect } from "react";
import Item from "./Item";

const Results = ({items, filterBy}) => {

  const itemsResult = items.map((item) => {
    if(item.category == filterBy || filterBy === ""){
      return <Item key={item.item_id} item={item} />;
    } else {
      return
    }

  });

  return <div id="Results">{itemsResult}</div>;
};

export default Results;
