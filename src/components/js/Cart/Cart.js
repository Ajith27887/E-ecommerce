import { useContext, useEffect } from "react"
import { CartContext } from '../Provider/CartProvider'; // Correct import
import { Container, Row, Col } from 'react-bootstrap';
import CartDetails from '../Cart/CartDetails';


import '../Cart/Cart.scss'
const Cart  = () =>{

    const { cartData } = useContext(CartContext);
    // const filterData = cartData.map((crr, index, arr) => (

    // ))
    useEffect(() => {
        console.log('cartData', cartData);
    },[cartData])
    
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        {cartData && cartData.length > 0 ? (
                                cartData.map((data, index) => (
                                    <div className="CarWrapper" key={index}>
                                        <div className="mt-2">
                                            <CartDetails {...data} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <CartDetails />
                                </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart