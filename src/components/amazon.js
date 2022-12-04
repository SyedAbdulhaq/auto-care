import React, { useState, useContext } from "react";
import products from "../data/data";
import Cards from "./card";
import "../styles/amazon.css";
import FeedbackContext from "../context/FeedbackContext";
const Amazon = () => {
  const { handleClick, filteredPrduct } = useContext(FeedbackContext);
  return (
    <div>
      {filteredPrduct.lenght > 0 ? (
        <section>
          {filteredPrduct.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      ) : (
        <section>
          {products.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Amazon;
