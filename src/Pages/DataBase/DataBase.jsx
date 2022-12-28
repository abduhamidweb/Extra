import React from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import Dashbaord from "../../Components/DashboardCard/DashboardTop";
import MostOrder from "../../Components/MostOrder/MostOrder";
import "./DataBase.scss"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Users from "../../Components/Users/Users";
import MostTypeCircle from "../../Components/MostTypeCircle/MostTypeCircle"

const DataBase = () => {
  const [valueMeal,setValueMeal]=useState("today")
const orderData=[]
    let OrderCard = [
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg:
          "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
        MostDescription: "200 dishes ordered",
        id: 1,
        Category: "today",
      },
      {
        MostTitle: "Salted pasta with mushroom sauce",
        MostImg:
          "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        MostDescription: "120 dishes ordered",
        id: 2,
        Category: "today",
      },
      {
        MostTitle: "Beef dumpling in hot and sour soup",
        MostImg:
          "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
        MostDescription: "80 dishes ordered",
        id: 3,
        Category: "today",
      },
      {
        MostTitle: "Salted pasta with mushroom sauce",
        MostImg: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
        MostDescription: "80 dishes ordered",
        id: 4,
        Category: "lastday",
      },
      {
        MostTitle: "Beef dumpling in hot and sour soup",
        MostImg: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        MostDescription: "120 dishes ordered",
        id: 5,
        Category: "lastday",
      },
      {
        MostTitle: "Spicy seasoned seafood noodles",
        MostImg:
          "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        MostDescription: "30 dishes ordered",
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
      <div className="row m-0 p-0">
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
        <div className="col-4 ">
          <div className="OrderMailWrap MostOrderCard">
            <div className="mostTitleSelect d-flex">
              <h2 className="mostTitleSelect__mostTitle">Most Ordered</h2>
              <span className="MostSpan">
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
              </span>
            </div>
            <hr className="my-1"/>
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

          <div className="mostTypeCircleWrapp">
            <div className="topMostTypeWrapp d-flex mb-2 justify-content-between align-item-center">
              <h2 className="topMostTypeTitle m-0">
              Most Type of Order
              </h2>
           <span className="mostCircleSelectWrapp">
            <select id="circleSelect" className="circleSelect">
              <option value="Tooday">Tooday</option>
              <option value="Lastday">Lastday</option>
            </select>
           </span>
            </div>
            <hr className="m-0"/>
{/* <MostTypeCircle/> */}
          </div>
        </div>
      </div>
    </>
  );
  }

export default DataBase;
