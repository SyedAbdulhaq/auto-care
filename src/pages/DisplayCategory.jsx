import React, { useState, useContext } from "react";
import products from "../data/data";
import Cards from "../components/card";
import "../styles/amazon.css";
import FeedbackContext from "../context/FeedbackContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const DisplayCategory = ({ category }) => {
  const { handleClick } = useContext(FeedbackContext);

  return (
    <div>
      <section class="row">
        {products
          .filter((post) => {
            if (post.title.includes(category)) {
              return post;
            }
          })
          .map((post, index) => (
            <Cards
              key={index + 1}
              item={post}
              handleClick={handleClick}
              index={index}
            />
            // <p>{post.title}</p>
          ))}
      </section>
    </div>
  );
};

export default DisplayCategory;
