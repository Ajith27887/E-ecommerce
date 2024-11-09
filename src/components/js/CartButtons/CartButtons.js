import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";

import '../CartButtons/CartButtons.scss';

function  CartButtons () {
    const [cart, setCart] = useState(0);

    const handleCart = () =>{
        setCart((prev) => prev +1)
    }
    return(
        <div className="mt-2">
            <Button onClick={handleCart} >Add to Cart</Button>
            <span className="mx-2 cart">
                <BsCartCheckFill style={{width : '20px'}}/>
                <span className="carknum mx-1">
                    {cart}
                </span>
            </span>
        </div>
    )
}

export default CartButtons