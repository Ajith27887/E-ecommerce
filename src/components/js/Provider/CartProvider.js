import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    const [cartCount, setCartCount] = useState(0); 

    const addToCart = (item) => {
        setCartData([...cartData, item]);
        setCartCount(cartCount + 1); 
    };

    return(
        <CartContext.Provider value={{cartData, setCartData, cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    )

} 

export default CartProvider