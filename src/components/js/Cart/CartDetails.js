import { useContext, useCallback, useEffect } from "react";
import { CartContext } from "../Provider/CartProvider";
import { FaMinus } from "react-icons/fa";
import "./CartDetails.scss";
import { TbExposureMinus1 } from "react-icons/tb";

const CartDetails = (props = {}) => {
  const { name = "", image = "", caloriesPerServing = "" } = props,
    { itemCounts, setItemCounts, filterData, setFilterData, setTotal, total } =
      useContext(CartContext),
    handleMinus = useCallback(() => {
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
    }, [filterData, setFilterData, setItemCounts, total, setTotal]);

  return (
    <div>
      <div className="mt-2">
        <div className="container CartList">
          <div className="row">
            <div className="col-12 p-3 Bill-container d-flex bold align-items-center justify-content-between">
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
                  <TbExposureMinus1
                    className="mx-2"
                    onClick={handleMinus}
                  ></TbExposureMinus1>
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
