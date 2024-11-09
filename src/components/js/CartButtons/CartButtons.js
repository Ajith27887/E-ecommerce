import { useCallback, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from '../Provider/CartProvider';


import '../CartButtons/CartButtons.scss';

function  CartButtons (props = {}) {
    const { cartCount, addToCart } = useContext(CartContext),
        navigate = useNavigate(),
        {setCartData,cartData } = useContext(CartContext);

    const handleCart = useCallback (() =>{
        addToCart(props)
    }, [props, addToCart])
    
    const handlecartredirect = () => {
        navigate("/cart")
    };

    return(
        <div className="mt-2">
            <Button onClick={handleCart}> Add to Cart </Button>
            <span className="mx-2 cart" onClick={handlecartredirect}>
                <BsCartCheckFill style={{width : '20px'}}/>
                <span className="cartnum mx-1">
                    {cartCount}
                </span>
            </span>
        </div>
    )
}

export default CartButtons