import React, { useState, useContext } from "react";
import products from "../data/data";
import Cards from "../components/card";
import "../styles/amazon.css";
import FeedbackContext from "../context/FeedbackContext";
const DisplayCategory = ({ category }) => {
  const { handleClick } = useContext(FeedbackContext);

  return (
    <div>
      <section>
        {products
          .filter((post) => {
            if (post.title.includes(category)) {
              return post;
            }
          })
          .map((post, index) => (
            <Cards
              key={index}
              item={post}
              handleClick={handleClick}
              index={post.id}
            />
            // <p>{post.title}</p>
          ))}
      </section>
    </div>
  );
};

export default DisplayCategory;
