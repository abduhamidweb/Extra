import React from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import Dashbaord from "../../Components/DashboardCard/DashboardTop";
import MostOrder from "../../Components/MostOrder/MostOrder";
import "./DataBase.scss"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Users from "../../Components/Users/Users";

const DataBase = () => {
  const [valueMeal,setValueMeal]=useState("today")
const orderData=[]
    let OrderCard = [
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg: "https://picsum.photos/61/61",
        MostDescription: "MostDescription",
        id: 1,
        Category: "today",
      },
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg: "https://picsum.photos/61/61",
        MostDescription: "MostDescription",
        id: 2,
        Category: "today",
      },
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg: "https://picsum.photos/61/61",
        MostDescription: "MostDescription",
        id: 3,
        Category: "today",
      },
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg: "https://picsum.photos/id/45/61/61",
        MostDescription: "MostDescription",
        id: 4,
        Category: "lastday",
      },
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg: "https://picsum.photos/id/45/61/61",
        MostDescription: "MostDescription",
        id: 5,
        Category: "lastday",
      },
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg: "https://picsum.photos/id/45/61/61",
        MostDescription: "MostDescription",
        id: 6,
        Category: "lastday",
      },
  ];

  OrderCard.map(i => {
    if (i.Category == valueMeal) {
      orderData.push(i);
    } 
})

  
  const navigate = useNavigate()
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
              iconInfo="bi bi-bookmark-dash"
              foiz="-12.40%"
              arrowIcon="bi bi-arrow-down"
              CardPrice="23,456"
              CardTotol="Total Revenue"
              iconInfoColor="#FFB572"
              foizColor=" #FF7CA3"
              arrowColor="#FF7CA3"
              bgIcon="rgba(255, 100, 113, 0.24)"
            />
            <Dashbaord
              iconInfo="bi bi-people"
              foiz="+2.40%"
              arrowIcon="bi bi-arrow-up"
              CardPrice="1,234"
              CardTotol="Total Revenue"
              iconInfoColor="#2D9CDB"
              foizColor=" #50D1AA"
              arrowColor="#50D1AA"
              bgIcon="rgba(136, 224, 145, 0.24)"
            />
          </div>
          <Users />
        </div>
        <div className="col-4 MostOrderCard">
          <div className="mostTitleSelect d-flex">
            <h2 className="mostTitleSelect__mostTitle">Most Ordered</h2>
            <select
              className="mostTitleSelect__MostSelect"
              id="MostSelectId"
              onChange={(e) => {
                setValueMeal(e.target.value);
              }}
            >
              <option>today</option>
              <option>lastday</option>
            </select>
          </div>
          <hr />
          {orderData.map((el) => {
            return <MostOrder data={el} />;
          })}
          <button
            className="btn btn-mostOrder"
            onClick={() => {
              navigate("/home");
            }}
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
  }

export default DataBase;
