import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, price, image, details, convenience } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        {/* <p>{details}</p> */}
        <p>{convenience}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to favourites</button>
      </div>
    </div>
  );
};

export default Cards;
