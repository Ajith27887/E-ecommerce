import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [itemCounts, setItemCounts] = useState({});
    const [filterData, setFilterData] = useState([]);

    const filterDataContainer = cartData.filter((crr, index) => cartData.indexOf(crr) === index);
    useEffect(() =>{
        setFilterData(filterDataContainer);
    },[cartData])

    const addToCart = (item) => {
        setCartData([...cartData, item]);
        setCartCount(cartCount + 1); 

        setItemCounts(prevItemCounts => {
            const updatedItemCounts = { ...prevItemCounts };
            console.log(prevItemCounts,'updatedItemCounts');
            if (updatedItemCounts[item.id]) {
                updatedItemCounts[item.id] += 1;
            } else {
                updatedItemCounts[item.id] = 1;
            }
            return updatedItemCounts;
        });
    };

    return(
        <CartContext.Provider value={{cartData, setCartData,setItemCounts, setFilterData,filterData, cartCount, addToCart, itemCounts }}>
            {children}
        </CartContext.Provider>
    )

} 

export default CartProvider