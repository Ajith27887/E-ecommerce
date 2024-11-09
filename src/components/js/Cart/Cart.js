import { useContext, useEffect } from "react"
import { CartContext } from '../Provider/CartProvider'; // Correct import
import { Container, Row, Col } from 'react-bootstrap';
import CartDetails from '../Cart/CartDetails';


import '../Cart/Cart.scss'
const Cart  = () =>{

    const { cartData } = useContext(CartContext);
    useEffect(() => {
        console.log('cartData', cartData);
    },[cartData])
    
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        {cartData && cartData.map(data => (
                            <div className="CarWrapper">
                                <div className="mt-2">
                                    <CartDetails {...data}/>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart