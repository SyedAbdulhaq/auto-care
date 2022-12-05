import React, { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import ProductDetails from "../pages/ProductDetails";
import { useNavigate, Link } from "react-router-dom";

const Cards = ({ item, handleClick, index }) => {
  const { ProductDetails } = useContext(FeedbackContext);
  const { title, price, image, id } = item;
  const navigate = useNavigate();
  useEffect(() => {}, [navigate]);
  return (
    <div className="cards" key={index}>
      <div className="image_box">
        {/* <Link to="/product-details?sort={id}"> */}
        <img
          src={image}
          alt=""
          onClick={() => {
            ProductDetails(id);
            navigate("/product-details");
          }}
        />
        {/* </Link> */}
      </div>
      <div className="details">
        <p>{title}</p>
        {/* <p>{details}</p> */}
        {/* <p>{convenience}</p> */}
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
