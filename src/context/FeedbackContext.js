import { createContext, useState, useEffect } from "react";
import products from "../data/data";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const [filterProduct, setfilterProduct] = useState([]);
  let filteredPrduct = [];

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) {
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  const desiredProduct = (seacrh) => {
    filteredPrduct = products.filter((item) => {
      return seacrh === item.title;
    });

    console.log(filteredPrduct);
  };

  return (
    <FeedbackContext.Provider
      value={{
        handleClick,
        cart,
        setCart,
        handleChange,
        desiredProduct,
        filteredPrduct,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
