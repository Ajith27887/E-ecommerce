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
    if (filterData.length === 0) {
      navigate("/Home");
    }
  }, [filterData, setCartData, setFilterData, navigate]);

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(filterData));
  }, [filterData]);
  const local = localStorage.getItem("names");
  const localArr = JSON.parse(local);
  console.log(local, "local");

  useEffect(() => {
    const Total = cartData.reduce(
      (acc, data) => acc + data.caloriesPerServing,
      0
    );
    setTotal(Total);
  }, [cartData, setTotal]);

  return (
    <>
      {/* <Button variant="primary" >
        Custom Width Modal
      </Button> */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white" }}>Food List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Badge bg="primary" style={{ fontSize: "20px" }}>
              Bill
            </Badge>
          </Col>
          <Container>
            <Row>
              <Col>
                {cartData &&
                local &&
                localArr &&
                filterData &&
                filterData.length > 0 ? (
                  localArr.map((data, index) => (
                    <div className="CarWrapper" key={data.id}>
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

  // return (
  //   <div>
  //     <Container className="mt-4">
  //       <Row>
  //         <Col>
  //           <Badge bg="primary" style={{ fontSize: "20px" }}>
  //             {" "}
  //             Total Amount : {total}
  //           </Badge>
  //         </Col>
  //       </Row>
  //     </Container>
  //     <Container fluid>
  //       <Row>
  //         <Col>
  //           {cartData && local && filterData && filterData.length > 0 ? (
  //             localArr.map((data, index) => (
  //               <div className="CarWrapper" key={index}>
  //                 <div className="mt-2">
  //                   <CartDetails {...data} />
  //                 </div>
  //               </div>
  //             ))
  //           ) : (
  //             <div>
  //               <CartDetails />
  //             </div>
  //           )}
  //         </Col>
  //       </Row>
  //     </Container>
  //   </div>
  // );
};

export default Cart;
