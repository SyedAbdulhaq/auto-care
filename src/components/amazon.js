import React, { useState, useContext } from "react";
import products from "../data/data";
import Cards from "./card";
import "../styles/amazon.css";
import FeedbackContext from "../context/FeedbackContext";
const Amazon = () => {
  const { handleClick, search } = useContext(FeedbackContext);

  return (
    <div>
      <section>
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
              key={post.id}
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

export default Amazon;
