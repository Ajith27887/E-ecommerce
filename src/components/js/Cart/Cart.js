import { useContext, useEffect, useState } from "react"
import { CartContext } from '../Provider/CartProvider';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import CartDetails from '../Cart/CartDetails';
// import { Badge } from 'react-bootstrap';




import '../Cart/Cart.scss'
const Cart  = () =>{

    const { cartData } = useContext(CartContext),
        filterData = cartData.filter((crr, index) => cartData.indexOf(crr) === index),
        [total, setTotal] = useState(0);  
      
    useEffect(() => {
        const Total = cartData.reduce((acc, data) => acc + data.caloriesPerServing, 0)
        setTotal(Total)
        
    }, [cartData]);
    
    return(
        <div>
                <Container className="mt-4">
                    <Row>
                        <Col>
                            <Badge bg='primary' style={{fontSize : '20px'}}> Total Amount : {total}</Badge>
                        </Col>
                    </Row>
                </Container>
            <Container fluid>
                <Row>
                    <Col>
                        {cartData && filterData.length > 0 ? (
                                filterData.map((data, index) => (
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