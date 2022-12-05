import { createContext, useState, useEffect } from "react";
import products from "../data/data";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [filterProduct, setfilterProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [getID, setID] = useState();
  // let seacrh = "Oil";
  let filteredPrduct = [];
  // var search;

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
  const desiredProduct = (text) => {
    // filteredPrduct = products.filter((item) => {
    //   return seacrh === item.title;
    // });
    // setSeacrh(text);
    // search = text;
    console.log(text);
    setSearch(text);
  };
  const ProductDetails = (text) => {
    // filteredPrduct = products.filter((item) => {
    //   return seacrh === item.title;
    // });
    // setSeacrh(text);
    // search = text;
    console.log(text);
    setID(text);
  };

  return (
    <FeedbackContext.Provider
      value={{
        handleClick,
        cart,
        setCart,
        handleChange,
        desiredProduct,
        search,
        setID,
        getID,
        ProductDetails,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
