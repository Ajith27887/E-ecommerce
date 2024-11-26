import { useCallback, useContext, useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Provider/CartProvider";
import { Container, Row, Col } from "react-bootstrap";
import OverlayScreen from "../OverlayScreen/OverlayScreen";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { MdDeliveryDining } from "react-icons/md";
import { RiDrinksLine } from "react-icons/ri";
import Ingredients from "../Ingredients/Ingredients";

import "../CartButtons/CartButtons.scss";

function CartButtons(props = {}) {
  const { cartCount, addToCart, setCartCount } = useContext(CartContext),
    { ingredients } = props,
    navigate = useNavigate(),
    [coolDrinks, setCoolDrinks] = useState([]),
    // [hoveredDrink, setHoveredDrink] = useState(null),  WIP....
    [animateScooty, setAnimateScooty] = useState(false),
    [alertTime, setAlertTime] = useState(false);

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

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        setCoolDrinks(response.data.drinks);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedCoolDrinks = chunkArray(coolDrinks, 4);

  //   const handleHover = (id) => {
  //     setHoveredDrink(id);                 WIP....
  //   };

  return (
    <div className="mt-2">
      <div>
        <div className="d-flex">
          <div>
            <Button>
              <MdDeliveryDining
                className={`scooty-icon mx-2 ${animateScooty ? "animate" : ""}`}
              />
            </Button>
          </div>
          <div className="mx-2 cart" onClick={handlecartredirect}>
            <Button
              variant="warning"
              className={`cartnum ${animateScooty ? "vibration" : ""}  mx-1`}
            >
              <BsCartCheckFill style={{ width: "30px", color: "black" }} />{" "}
              {cartCount}
            </Button>
          </div>
          <div>
            {animateScooty && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setAlertTime(false)}
              >
                <Alert.Heading>successfully item selected!</Alert.Heading>
              </Alert>
            )}
          </div>

          <div>
            {alertTime && cartCount <= 0 && (
              <Alert
                variant="danger"
                style={{ width: "100%" }}
                dismissible
                onClose={() => setAlertTime(false)}
              >
                <Alert.Heading>
                  Don't forget to choose a delicious food item!
                </Alert.Heading>
              </Alert>
            )}
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="cool-drinks mt-5">
              <Carousel>
                {chunkedCoolDrinks.map((chunk, index) => (
                  <div key={index} className="overlay-container">
                    <Row>
                      {chunk.map((data, idx) => (
                        <Col key={idx} xs={3}>
                          <div className="drink-container">
                            <img
                              //   onMouseEnter={() => handleHover(chunk.id)}
                              src={data.strDrinkThumb}
                              style={{ width: "100%" }}
                              key={idx}
                              alt={data.strDrink}
                            />
                            {/* {hoveredDrink === chunk.id &&  <OverlayScreen {...data} />} */}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <Ingredients ingredients={ingredients} />
      </div>
    </div>
  );
}

export default CartButtons;
