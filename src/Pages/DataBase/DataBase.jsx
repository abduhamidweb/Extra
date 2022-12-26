import React from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import Dashbaord from "../../Components/DashboardCard/DashboardTop";
import Users from "../../Components/Users/Users";

const DataBase = () => {
  return (
    <>
      <div className="row">
        <div className="col-8 pt-3">
          <PageTitle title={"Dashboard"} date={"Tuesday 2 Feb, 2021"} />
          <div className="row">
            <Dashbaord
              iconInfo="bi bi-currency-dollar"
              foiz="+32.40%"
              arrowIcon="bi bi-arrow-up"
              CardPrice="$10,243.00"
              CardTotol="Total Revenue"
              iconInfoColor="#9288E0"
              foizColor=" #50D1AA"
              arrowColor="#50D1AA"
              bgIcon="rgba(136, 224, 145, 0.24)"
            />
            <Dashbaord
              iconInfo="bi bi-box-arrow-down"
              foiz="-12.40%"
              arrowIcon="bi bi-arrow-down"
              CardPrice="23,456"
              CardTotol="Total Revenue"
              iconInfoColor="#FFB572"
              foizColor=" #FF7CA3"
              arrowColor="#FF7CA3"
              bgIcon="rgba(136, 224, 145, 0.24)"
            />
            <Dashbaord
              iconInfo="bi bi-people-fill"
              foiz="+2.40%"
              arrowIcon="bi bi-arrow-up"
              CardPrice="1,234"
              CardTotol="Total Revenue"
              iconInfoColor="#FFB572"
              foizColor=" #50D1AA"
              arrowColor="#50D1AA"
              bgIcon="rgba(136, 224, 145, 0.24)"
            />
          </div>
            <Users />
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
};

export default DataBase;
