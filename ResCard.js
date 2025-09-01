import React from "react";

const ResCard = (props) => {
  const { id, resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <div className="cardInnerContainer">
        <h4 className="slaTime">{avgRating}</h4>
        <img id="starIcon"  src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-one-stars-rating-png-png-image_10262742.png"/>
        <h4 className="slaTime">{sla.slaString}</h4>
      </div>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwo}</h5>
      <h5>{id}</h5>
    </div>
  );
};

export default ResCard;
