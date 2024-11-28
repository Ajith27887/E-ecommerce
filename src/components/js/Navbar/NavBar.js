import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../Provider/CartProvider";
import { BsCartCheckFill } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { GrNotes } from "react-icons/gr";

import RecipesListing from "../RecipesListing/RecipesListing";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCallback, useContext, useEffect, useState } from "react";

function NavScrollExample() {
  const { cartCount, addToCart, setCartCount, filterData, setShow, show } =
      useContext(CartContext),
    [animateScooty, setAnimateScooty] = useState(false);

  const handlecartredirect = useCallback(() => {
    if (cartCount) {
      setShow(true);
    }
  }, [cartCount, setShow]);
  return (
    <>
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
            </Nav>
            <div className="mx-2 cart" onClick={handlecartredirect}>
              <Button
                variant="warning"
                className={`cartnum ${animateScooty ? "vibration" : ""}  mx-1`}
              >
                <GrNotes
                  onClick={() => setShow(true)}
                  style={{ width: "30px", color: "black" }}
                />{" "}
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
      {show && filterData && <Cart />}
    </>
  );
}

export default NavScrollExample;
