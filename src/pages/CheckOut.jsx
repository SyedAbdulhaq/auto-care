import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";
import FeedbackContext from "../context/FeedbackContext";
import Button from "react-bootstrap/Button";

const CheckOut = () => {
  const navigate = useNavigate();
  const { handleChange, cart, setCart } = useContext(FeedbackContext);
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  // const checkOutItems =()=>{

  // }
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {/* <div className="total">
        <span></span>
        <span>Rs  {price}</span>
      </div> */}
      {cart.map((item) => (
        <div>
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              {/* <p>{item.Accomodation}</p>
            <p>{item.convenience}</p> */}
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      {price > 0 ? (
        <div>
          <div className="total">
            <span>Total Amount </span>
            <span>Rs {price}</span>
          </div>
          <div>
            <Button variant="danger" onClick={() => navigate("/profile")}>
              Proceed to checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span> Start Shopping</span>
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};

export default CheckOut;
