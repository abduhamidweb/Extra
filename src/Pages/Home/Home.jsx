import React from "react";
import OrdersHome from "../../Components/OrdersHome/OrdersHome";
import PageTitle from "../../Components/PageTitile/PageTitle";
import SettingList from "../../Components/SettingList/SettingList";

import "./style.scss";
const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <PageTitle
            input={"input put"}
            title="Jaegar Resto"
            date="Tuesday, 2 Feb 2021"
          />

          {/* Muhammadamin */}
        </div>
        <div className="col-4 px-2">
<div className="ordersWrapp">
  {/* <h3 className="ordersTitle">
  Orders 
  </h3> */}
  <OrdersHome/>
</div>



        </div>
      </div>
    </div>
  );
};

export default Home;
