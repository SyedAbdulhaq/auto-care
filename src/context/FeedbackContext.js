import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [filterProduct, setfilterProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [getID, setID] = useState();

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) {
      toast.error("Product already exist in cart");
      return;
    } else {
      setCart([...cart, item]);
    }
  };

  const handleClickDetails = (item) => {
    if (cart.indexOf(item) !== -1) {
      toast.error("Product already exist in your cart");
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
    // console.log(text);
    setSearch(text);
  };
  const ProductDetails = (text) => {
    // filteredPrduct = products.filter((item) => {
    //   return seacrh === item.title;
    // });
    // setSeacrh(text);
    // search = text;
    // console.log(text);
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
        handleClickDetails,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
