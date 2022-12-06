import React, { useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import ProductDetails from "../pages/ProductDetails";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({ item, handleClick, index }) => {
  const { ProductDetails } = useContext(FeedbackContext);
  const { title, price, image, id } = item;
  const navigate = useNavigate();
  useEffect(() => {}, [navigate]);
  return (
    <div className="cards col-lg-2 col-md-3 col-sm-4 col-xs-6 " key={index}>
      {/* <div className="image_box" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        <img
     
          src={image}
          alt=""
          onClick={() => {
            ProductDetails(id);
            navigate("/product-details");
          }}
        />
      </div> */}
      {/* <div className="details">
        <p>{title}</p>
       
        <p>Price - {price}Rs</p>
        <button style={{background:"red"}} onClick={() => handleClick(item)}>Add to Cart</button>
      </div> */}
      <Card style={{ width: "10rem" }}>
        <Card.Img
          variant="top"
          src={image}
          onClick={() => {
            ProductDetails(id);
            navigate("/product-details");
          }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="danger" onClick={() => handleClick(item)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
