import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../Provider/CartProvider";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartDetails from "../Cart/CartDetails";


import "../Cart/Cart.scss";
const Cart = () => {
  const { cartData, filterData , total,setCartData, setTotal, setFilterData} = useContext(CartContext),
	navigate = useNavigate();

  useEffect(() => {
    const Total = cartData.reduce((acc, data) => acc + data.caloriesPerServing,0);
    setTotal(Total);
	
  }, [cartData]);

  useEffect(() =>{
	if (filterData.length === 0) {
		setCartData([])
		setFilterData([]);
		navigate('/')		
	}
  }, [filterData,setCartData, navigate])
  

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            <Badge bg="primary" style={{ fontSize: "20px" }}>
              {" "}
              Total Amount : {total}
            </Badge>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            {cartData &&  filterData && filterData.length > 0 ? (
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
  );
};

export default Cart;
