import React, {useState} from "react";
import orderFoodImg1 from "../../assets/images/orderFoofImg.png";
import "./styleOrders.css";
import Input from "../Input/Input"
const OrdersCard = ({  }) => {
    const [orderSize, setOrderSize]=useState(1)
  return (
    <>
      <div className="orderCard my-2">
        <div className="orderCardTopInfo d-flex align-items-center">
          <div className="ordersInfo d-flex align-items-center">
            <div className="orderImg">
              <img src={orderFoodImg1} alt="" className="orderFoodImg" />
            </div>
            <div className="orderText ps-3">
              <h4 className="orderTitle m-0">Spicy seasoned sea...</h4>
              <p className="orderPriceText m-0">$ 2.29</p>
            </div>
          </div>
          <div className="orderQtywrapp d-flex align-items-center">
            <Input type={"number"} minNumb={1} maxNumb={10} inputClass={"qtySize"} val={orderSize} setValue={setOrderSize}/>
            <div className="priceSize">$ 4,58</div>
          </div>
        </div>

        <div className="orderCardManagement d-flex align-items-center mt-2">
          <div className="orderInputWrapp ">
           <Input type={"text"} plece={"Order Note..."} inputClass={"orderDescInput w-100"}/>
          </div>
          <div className="orderBynWrapp">
            <button className="btn deleteCardBtn">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersCard;
