import React from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTS_MOCK_DATA } from "../utils/mockData";

function ResContainer(props) {
  const { restaurants } = props;
  return (
    <div className="res-container">
      {
        restaurants.map( (item) => (
          <RestaurantCard key={item.info.id} resData={item}/>
        ))
      }

    </div>
  );
}
export default ResContainer;
