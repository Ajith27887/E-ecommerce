import { useState, useContext, useCallback } from "react";
import { FaMinus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CartContext } from "../Provider/CartProvider";
import { GoPlus } from "react-icons/go";
import Detailpage from "../Detailpage/Detailpage";
import { MdExposurePlus1 } from "react-icons/md";

import "./OverlayScreen.scss";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../Provider/ModalProvider";

const OverlayScreen = (props = {}) => {
  const { tags = "", name = "", rating = "" } = props,
    { itemCounts, setItemCounts, filterData, setFilterData, setTotal, total } =
      useContext(CartContext),
    [anie, setAnie] = useState(false),
    { addToCart } = useContext(CartContext),
    [detail, setDetail] = useState(false),
    { show, setShow } = useContext(ModalContext),
    handleCart = useCallback(() => {
      setTimeout(() => addToCart(props));
      setAnie(true);
    }, [setAnie, setTimeout, addToCart]);

  const handleMinus = useCallback(() => {
    setItemCounts((prevItemCounts) => {
      const updatedItemCounts = { ...prevItemCounts };
      if (updatedItemCounts[props.id]) {
        updatedItemCounts[props.id] -= 1;
        if (updatedItemCounts[props.id] === 0) {
          setFilterData(filterData.filter((crr) => crr.id !== props.id));
        }
      }
      return updatedItemCounts;
    });
  }, []);

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
            <div
              className={anie ? "plusanimie" : ""}
              style={{ display: anie ? "block" : "none" }}
            >
              <MdExposurePlus1 style={{ width: "20px", color: "white" }} />
            </div>
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
