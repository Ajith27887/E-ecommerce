import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]),
    [cartCount, setCartCount] = useState(0),
    [itemCounts, setItemCounts] = useState({}),
    [filterData, setFilterData] = useState([]),
    [show, setShow] = useState(false),
    [total, setTotal] = useState(0);

  const filterDataContainer = cartData.filter(
    (crr, index) => cartData.indexOf(crr) === index
  );
  useEffect(() => {
    setFilterData(filterDataContainer);
  }, [cartData]);

  const addToCart = (item) => {
    setCartData([...cartData, item]);
    setCartCount(cartCount + 1);
    console.log(filterData, "asd");

    setItemCounts((prevItemCounts) => {
      const updatedItemCounts = { ...prevItemCounts };
      if (updatedItemCounts[item.id]) {
        updatedItemCounts[item.id] += 1;
      } else {
        updatedItemCounts[item.id] = 1;
      }
      return updatedItemCounts;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        setTotal,
        show,
        setShow,
        total,
        setCartCount,
        setCartData,
        setItemCounts,
        setFilterData,
        filterData,
        cartCount,
        addToCart,
        itemCounts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
