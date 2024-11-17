import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"; 
import { CartContext } from '../Provider/CartProvider';


import '../CartButtons/CartButtons.scss';
import axios from "axios";

function  CartButtons (props = {}) {
    const { cartCount, addToCart,setCartCount, filterData} = useContext(CartContext),
        navigate = useNavigate(),
        [alert, setAlert] = useState(false),
        [coolDrinks, setCoolDrinks] = useState([]);

    const handleCart = useCallback (() =>{
        addToCart(props)
    }, [props, addToCart])
    
    const handlecartredirect =  useCallback (() => {
        if (cartCount) {
            navigate("/cart")
            setCartCount(0);
        }else {
            setAlert(true)
        }
    }, [cartCount]);

    useEffect(() =>{
        ( async()=> {
            try{
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            setCoolDrinks(response.data.drinks);
            // console.log(response.data);
            
        }catch(error){
            console.log(error);
            
        }})()
    },[])

    

    return(
         <div className="mt-2">
            <Button onClick={handleCart} > Add to Cart </Button>
            <span className="mx-2 cart" onClick={handlecartredirect}>
                <BsCartCheckFill style={{width : '20px'}}/>
                <span className="cartnum mx-1">
                    {cartCount}
                </span>
            </span>
            <div>
                {alert  && cartCount <= 0 &&(
                    <Alert variant="danger" style={{width : '100%'}} dismissible  onClose={() => setAlert(false)}>
                        <Alert.Heading>Don't forget to choose a delicious food item!</Alert.Heading>
                    </Alert>
                )}  
            </div>
            <div className="cool-drinks">
                {coolDrinks.map(data => (
                    <img src={data.strDrinkThumb}  style={{width : '100px'}}/>
                ))}
            </div>
        </div>
    )
}

export default CartButtons