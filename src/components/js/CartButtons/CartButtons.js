import { useCallback, useContext, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from '../Provider/CartProvider';


import '../CartButtons/CartButtons.scss';

function  CartButtons (props = {}) {
    const { cartCount, addToCart } = useContext(CartContext),
        navigate = useNavigate(),
        [alert, setAlert] = useState(false),
        {setCartData,cartData } = useContext(CartContext);

    const handleCart = useCallback (() =>{
        addToCart(props)
    }, [props, addToCart])
    
    const handlecartredirect =  useCallback (() => {
        if (cartCount) {
            navigate("/cart")
        }else {
            setAlert(true)
        }
    }, [cartCount]);

    return(
         <div className="mt-2">
            <Button onClick={handleCart}> Add to Cart </Button>
            <span className="mx-2 cart" onClick={handlecartredirect}>
                <BsCartCheckFill style={{width : '20px'}}/>
                <span className="cartnum mx-1">
                    {cartCount}
                </span>
            </span>
            <div>
                {alert && (
                        <Alert variant="danger" style={{width : '100%'}} dismissible  onClose={() => setAlert(false)}>
                            <Alert.Heading>Don't forget to choose a delicious food item!</Alert.Heading>
                        </Alert>
                    )}  
                </div>
        </div>
    )
}

export default CartButtons