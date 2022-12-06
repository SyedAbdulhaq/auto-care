import React, { useState, useContext } from "react";
import products from "../data/data";
import Cards from "./card";
import "../styles/amazon.css";
import FeedbackContext from "../context/FeedbackContext";
const Amazon = () => {
  const { handleClick, search } = useContext(FeedbackContext);

  return (
    <div>
      <section class="row">
        {products
          .filter((post) => {
            if (search === "" || search === undefined) {
              return post;
            } else if (
              post.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post, index) => (
            <Cards
              key={index}
              item={post}
              handleClick={handleClick}
              index={index + 1}
            />
            // <p>{post.title}</p>
          ))}
      </section>
    </div>
  );
};

export default Amazon;
