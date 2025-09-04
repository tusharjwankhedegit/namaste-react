import React from "react";
import { CDN_URL } from "../utils/constants";
import { STAR_ICON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
    // console.log(key)
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <div className="cardInnerContainer">
        <h4 className="slaTime">{avgRating}</h4>
        <img id="starIcon"  src= {STAR_ICON_URL}/>
        <h4 className="slaTime">{sla.slaString}</h4>
      </div>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
