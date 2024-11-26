import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../Provider/CartProvider";
import { useNavigate } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";

import RecipesListing from "../RecipesListing/RecipesListing";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCallback, useContext, useEffect, useState } from "react";

function NavScrollExample() {
  const { cartCount, addToCart, setCartCount } = useContext(CartContext),
    navigate = useNavigate(),
    [alertTime, setAlertTime] = useState(false),
    [animateScooty, setAnimateScooty] = useState(false);

  const handlecartredirect = useCallback(() => {
    if (cartCount) {
      navigate("/cart");
      setCartCount(0);
    } else {
      setAlertTime(true);
      setTimeout(() => {
        setAlertTime(false);
      }, 2000);
    }
  }, [cartCount]);
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            {/* <Nav.Link href="/cart">Cart</Nav.Link> */}
          </Nav>
          <div className="mx-2 cart" onClick={handlecartredirect}>
            <Button
              variant="warning"
              className={`cartnum ${animateScooty ? "vibration" : ""}  mx-1`}
            >
              <BsCartCheckFill style={{ width: "30px", color: "black" }} />{" "}
              {cartCount}
            </Button>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
