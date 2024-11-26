import { useState, useContext, useCallback } from "react";
import { FaMinus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CartContext } from "../Provider/CartProvider";
import { GoPlus } from "react-icons/go";
import Detailpage from "../Detailpage/Detailpage";

import "./OverlayScreen.scss";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../Provider/ModalProvider";

const OverlayScreen = (props = {}) => {
  const { tags = "", name = "", rating = "" } = props,
    { itemCounts, setItemCounts, filterData, setFilterData, setTotal, total } =
      useContext(CartContext),
    { addToCart } = useContext(CartContext),
    [detail, setDetail] = useState(false),
    { show, setShow } = useContext(ModalContext),
    handleCart = useCallback(() => {
      setTimeout(() => addToCart(props));
    }, [props, addToCart]);
  const handleMinus = useCallback(() => {
    setItemCounts((prevItemCounts) => {
      const updatedItemCounts = { ...prevItemCounts };
      if (updatedItemCounts[props.id]) {
        updatedItemCounts[props.id] -= 1;
        setTotal(total - props.caloriesPerServing); // Minus Total value
        if (updatedItemCounts[props.id] === 0) {
          setFilterData(filterData.filter((crr) => crr.id !== props.id));
        }
      }
      return updatedItemCounts;
    });
  }, [filterData, setFilterData, total, setTotal]);
  // handleHover = () => {
  //   setDetail(true);
  // };

  return (
    <IconContext.Provider
      value={{ color: "white", size: "75px", font: "bold" }}
    >
      <div className="overlay-screen">
        <div className="badges-container">
          <div className="plus">
            <GoPlus
              onClick={handleCart}
              style={{ width: "20px", color: "white" }}
            />
          </div>
          <div className="badges">{tags[0]}</div>

          <div>
            {" "}
            {itemCounts && (
              <FaMinus
                onClick={handleMinus}
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </div>
        </div>
        {detail && <Detailpage {...props} show={show} setShow={setShow} />}
      </div>
    </IconContext.Provider>
  );
};

export default OverlayScreen;
