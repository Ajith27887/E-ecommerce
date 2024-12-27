import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Provider/CartProvider";
import { TbMoodEmpty } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";

import "./Bill.scss";

const Bill = () => {
  const { filterData, total, cartData, setTotal, setShow } =
      useContext(CartContext),
    [discount, setDiscount] = useState(0);

  useEffect(() => {
    const Total = cartData.reduce(
      (acc, data) => acc + data.caloriesPerServing,
      0
    );
    setTotal(Total);

    if (filterData.length === 0) {
      setShow(false);
    }
  }, [cartData, setTotal, total, filterData]);
  return (
    <div className="bill">
      <div>
        <p className="pay">Payment Details {<CiShoppingCart />}</p>
      </div>
      {filterData.length > 0 ? (
        <>
          <div className="Total ">
            <div>Price ({filterData.length})</div>
            <div className="text-success">${" " + total}</div>
          </div>

          <div className="Total  mt-3">
            <div>Discount </div>
            <div className="text-success">
              {total > 1000 ? setDiscount(total / 5) : "-"}
            </div>
          </div>

          <div className="Total  mt-3">
            <div>Delivery Charges</div>
            <div className="text-success">Free</div>
          </div>

          <div className="Total bill mt-3">
            <b>Total Amount</b>
            <b>{discount ? total - discount : total}</b>
          </div>
        </>
      ) : (
        <div>
          <p>Cart is Empty {<TbMoodEmpty />} </p>
        </div>
      )}
    </div>
  );
};

export default Bill;
