import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../Provider/CartProvider";
import Cart from "../Cart/Cart";
import { GrNotes } from "react-icons/gr";
import { IoFilterOutline } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import { MdFreeBreakfast } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";

import "./NavBar.scss";

function NavScrollExample() {
  const { filterData, setShow, show, setFoodfilter, foodfilter } =
      useContext(CartContext),
    navigate = useNavigate();

  const logout = useCallback(() => {
    auth.signOut();
    navigate("/");
  }, []);

  const user = auth.currentUser;
  let displayName;
  let photoURL;
  let uid;
  if (user !== null) {
    displayName = user.displayName;
    photoURL = user.photoURL;
    uid = user.uid;
  }

  const filterFood = (value) => {
    setFoodfilter(value);
  };

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
                variant="none"
                style={{ color: "white", border: "none" }}
                className={`cartnum mx-1`}
              >
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <IoFilterOutline id="dropdown-basic" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      className={foodfilter === "All" ? "active" : ""}
                      onClick={() => filterFood("All")}
                    >
                      All
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={foodfilter === "Breakfast" ? "active" : ""}
                      onClick={() => filterFood("Breakfast")}
                    >
                      Breakfast <MdFreeBreakfast />
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => filterFood("Lunch")}
                      className={foodfilter === "Lunch" ? "active" : ""}
                    >
                      Lunch <MdLunchDining />
                    </Dropdown.Item>
                    <Dropdown.Item
                      className={foodfilter === "Dinner" ? "active" : ""}
                      onClick={() => filterFood("Dinner")}
                    >
                      Dinner
                      <MdDinnerDining />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Button>
              <Button
                variant="warning"
                className={`cartnum mx-1`}
                onClick={() =>
                  filterData.length > 0 ? setShow(true) : setShow(false)
                }
              >
                <GrNotes style={{ width: "30px", color: "black" }} />{" "}
                {filterData.length}
              </Button>
            </div>
            <Form className="d-flex align-items-end">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              {/* <Button className="mx-2" variant="success">
                Search
              </Button> */}
              <img
                src={photoURL}
                alt="photo"
                className="rounded-circle"
                style={{ width: "50px" }}
              />
              <p className="mx-2">{displayName}</p>
            </Form>
            <Button variant="danger" onClick={logout}>
              {" "}
              Logout{" "}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && filterData && <Cart />}
    </>
  );
}

export default NavScrollExample;
