import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "react-bootstrap/Button";
import products from "../data/data";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function ProductDetails({ item }) {
  // const { title, price, image, details, ProductName } = item;
  const { handleClickDetails, getID, setID } = useContext(FeedbackContext);
  const navigate = useNavigate();
  return (
    <div>
      {products
        .filter((post) => {
          if (post.id === getID) {
            // setID();
            return post;
          }
        })
        .map((post, index) => (
          <div key={index}>
            <div class="container">
              <div class="row justify-content-md-left">
                <p class="h1">Product Details</p>
              </div>
            </div>
            <br />
            {/* <div className='MainDiva'> */}
            <div class="container">
              <div class="row">
                <div class="col-8">
                  {/* <img src={post.image} alt=""></img> */}
                  <Card.Img variant="top" src={post.image} />
                </div>

                <div class="col-8">
                  <div class="card text-center">
                    <div class="card-header">
                      <b>Category: {post.title}</b>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{post.ProductName}</h5>
                      <p class="card-text">
                        {/* Qty: {hotel.qty} <br />
                  Product Weight: {hotel.productWeight} */}
                        <br />
                        <b>Product Price: Rs.{post.price}</b>
                        {/* <br />
                  Product Size: {hotel.productSize} */}
                        {/* <br />
                  Product Color: {hotel.productColor} */}
                        <br />
                        Product Description: {post.details}
                        <br />
                        <br />
                        <br />
                        <Button
                          variant="danger"
                          onClick={() => handleClickDetails(post)}
                        >
                          Add to Cart
                        </Button>
                      </p>
                    </div>
                    <div class="card-footer text-muted">Seller: {"abc"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
