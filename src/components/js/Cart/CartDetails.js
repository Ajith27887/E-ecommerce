import { useContext, useCallback } from "react";
import { CartContext } from "../Provider/CartProvider";
import { FaMinus } from "react-icons/fa";
import { Badge, Button } from "react-bootstrap";
import "./CartDetails.scss";
import { TbExposureMinus1 } from "react-icons/tb";

const CartDetails = (props = {}) => {
  const { name = "", image = "", caloriesPerServing = "" } = props,
    {
      itemCounts,
      setItemCounts,
      cartDara,
      filterData,
      setFilterData,
      setTotal,
      total,
    } = useContext(CartContext);

  const handleMinus = useCallback(() => {
    setItemCounts((prevItemCounts) => {
      const updatedItemCounts = { ...prevItemCounts };
      if (updatedItemCounts[props.id]) {
        updatedItemCounts[props.id] -= 1;
        setTotal((prevTotal) => prevTotal - props.caloriesPerServing);
        if (updatedItemCounts[props.id] === 0) {
          setFilterData(filterData.filter((crr) => crr.id !== props.id));
          delete updatedItemCounts[props.id];
          console.log(cartDara, filterData, "couts");
        }
      }
      return updatedItemCounts;
    });
    console.log(itemCounts, "count");
  }, [filterData, setFilterData, setTotal]);

  return (
    <div>
      <div className="mt-2">
        <div className="container CartList">
          <div className="row">
            <div className="col-12 p-4 Bill-container d-flex bold align-items-center justify-content-between">
              <div className="Bill-Text">
                <h6>{name}</h6>
              </div>
              <div className="d-flex align-items-center">
                <h6>
                  {" "}
                  <span className="multiple mx-3">
                    {itemCounts[props.id] || 0} x
                  </span>{" "}
                  {caloriesPerServing * itemCounts[props.id]} RS
                  <Badge
                    onClick={handleMinus}
                    style={{ cursor: "pointer" }}
                    className="mx-2"
                  >
                    <FaMinus className="mx-2"></FaMinus>
                  </Badge>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
