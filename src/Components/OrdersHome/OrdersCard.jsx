import React, { useState, useContext } from "react";
import context from "../../context/context";
import "./styleOrders.css";
import Input from "../Input/Input";
const OrdersCard = ({
  data: { strMeal, idMeal, strMealThumb, strMeasure6 },
}) => {

  const [orderSize, setOrderSize]=useState(1)


  return (
    <>
      <div className="orderCard my-2">
        <div className="orderCardTopInfo d-flex align-items-center">
          <div className="ordersInfo d-flex align-items-center">
            <div className="orderImg">
              <img
                src={strMealThumb}
                alt=""
                className="orderFoodImg rounded-9"
              />
            </div>
            <div className="orderText ps-2">
              <h4 className="orderTitle m-0">{strMeal.substring(0, 25)}...</h4>
              <p className="orderPriceText m-0">$ {idMeal.substring(1, 3)}</p>
            </div>
          </div>
          <div className="orderQtywrapp d-flex align-items-center">
            <Input
              type={"number"}
              minNumb={1}
              maxNumb={10}
              inputclassName={"qtySize"}
              val={orderSize}
              setValue={setOrderSize}
            />
            <div className="priceSize">
              $ {orderSize * idMeal.substring(1, 3)}
            </div>
          </div>
        </div>

        <div className="orderCardManagement d-flex align-items-center mt-2">
          <div className="orderInputWrapp ">
            <Input
              type={"text"}
              plece={"Order Note..."}
              inputclassName={"orderDescInput w-100"}
            />
          </div>
          <div className="orderBynWrapp">
            <button className="btn deleteCardBtn">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersCard;
