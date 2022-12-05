import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import products from "../data/data";
import { useNavigate } from "react-router-dom";
export default function ProductDetails({ item }) {
  // const { title, price, image, details, ProductName } = item;
  const { handleClick, getID, setID } = useContext(FeedbackContext);
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
                <div class="col-4">
                  <img src={post.image} alt=""></img>
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
                        <button variant="primary" onClick={handleClick}>
                          Add to Cart
                        </button>
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
