import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../Provider/CartProvider";
import Cart from "../Cart/Cart";
import { GrNotes } from "react-icons/gr";

import { useContext, useState } from "react";
import "./NavBar.scss";

function NavScrollExample() {
  const { filterData, setShow, show } = useContext(CartContext),
    [animateScooty, setAnimateScooty] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}
        fixed="top"
      >
        <Container>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="custom-nav-link" href="/Home">
                Home
              </Nav.Link>
            </Nav>
            <div className="mx-2 cart">
              <Button
                variant="warning"
                className={`cartnum ${animateScooty ? "vibration" : ""}  mx-1`}
                onClick={() =>
                  filterData.length > 0 ? setShow(true) : setShow(false)
                }
              >
                <GrNotes style={{ width: "30px", color: "black" }} />{" "}
                {filterData.length}
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
