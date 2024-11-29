import { useContext, useEffect } from "react";
import { CartContext } from "../Provider/CartProvider";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import CartDetails from "../Cart/CartDetails";

import "../Cart/Cart.scss";
const Cart = () => {
  const {
      cartData,
      filterData,
      total,
      setShow,
      show,
      setCartData,
      setTotal,
      setFilterData,
    } = useContext(CartContext),
    navigate = useNavigate();

  useEffect(() => {
    console.log(total, "total");

    if (filterData.length === 0) {
      setCartData([]);
      setFilterData([]);
      navigate("/Home");
    }
  }, [filterData, setFilterData, setCartData, navigate]);

  useEffect(() => {
    const Total = cartData.reduce(
      (acc, data) => acc + data.caloriesPerServing,
      0
    );
    setTotal(Total);
    console.log(filterData, "filter");

    if (filterData.length === 0) {
      setShow(false);
    }
  }, [cartData, setTotal, total, filterData]);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}>Shopping Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Col>
          <Container>
            <div className="price">
              <p className="mb-3 " style={{ color: "white" }}>
                price
              </p>
            </div>
            <Row>
              <Col>
                <div className="CarWrapper">
                  <div className="mt-2">
                    {filterData.length > 0 &&
                      filterData.map((data) => <CartDetails {...data} />)}
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex bold align-items-center justify-content-between p-3">
                <div>Total</div>
                <div>{total}</div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cart;
