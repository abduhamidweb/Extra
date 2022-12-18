import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styleOrders.css";
const OrdersHome = () => {
  return (
    <>
    <div className="ordersHomeWrapp">
    <h3 className="OrdersTitle">Orders</h3>

<NavLink to="/" className={({isActive})=>isActive ? "activeOrdersLinks" : "ordersLinkTitle"}>
  Dine In
</NavLink>
<NavLink to="/orders/togo" className={({isActive})=>isActive ? "activeOrdersLinks" : "ordersLinkTitle"}>
  To go
</NavLink>
<NavLink to="/orders/delivery" className={({isActive})=>isActive ? "activeOrdersLinks" : "ordersLinkTitle"}>
  Delivery
</NavLink>





<div className="dineTitleWrapp mt-4 p-0 d-flex">
        <div className="itemTitleWrapp">
          <h3 className="itemTitle ordersTitles m-0 p-0">Item</h3>
        </div>
        <div className="qtyPriceTitleWrapp d-flex align-items-center">
          <h3 className="qtyTitle ordersTitles m-0 p-0">Qty</h3>
          <h3 className="priceTitle m-0 p-0 ordersTitles">Price</h3>
        </div>
      </div>

      <hr className="" />

<Outlet />


<div className="ordersAllInfo pt-4">
        <div className="discountWrapp d-flex align-items-center justify-content-between my-1">
            <span className="discountTitleWrapp">
                <h4 className="discountTitle">Discount</h4>
            </span>
            <span className="discountPriceWrapp d-flex align-items-center">
            <h4 className="discountPriceTitle m-0">$</h4>
                <h4 className="discountPriceTitle m-0 ps-1">0</h4>
            </span>
        </div>
        <div className="totalWrapp d-flex align-items-center justify-content-between my-1">
            <span className="totaltTitleWrapp">
                <h4 className="totaltTitle">Sub Total</h4>
            </span>
            <span className="totalPriceWrapp d-flex align-items-center">
            <h4 className="totalPriceTitle m-0">$</h4>
                <h4 className="totalPriceTitle m-0 ps-1">21,03</h4>
            </span>
        </div>
        <button className="btn btn navigateToPayPage d-block w-100 mt-4">
        Continue to Payment
        </button>
      </div>
    </div>
    </>
  );
};

export default OrdersHome;
