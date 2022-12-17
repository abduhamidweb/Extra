import React from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import SettingList from "../../Components/SettingList/SettingList";
import NavigateLink from "../../Components/NavigateLink/NavigateLink"
import { Outlet } from "react-router-dom";


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
          <ul className="list">
            <NavigateLink LinkItem="/" TitleItem="Hot Dishes" />
            <NavigateLink LinkItem="/colddishes" TitleItem="  Cold Dishes" />
            <NavigateLink LinkItem="/soup" TitleItem="Soup" />
            <NavigateLink LinkItem="/grill" TitleItem="Grill" />
            <NavigateLink LinkItem="/appetizer" TitleItem="Appetizer" />
            <NavigateLink LinkItem="/desert" TitleItem="Desert" />
          </ul>
          <div className="NavigateLine"></div>
          <section>
            <div className="container">
              <Outlet />
            </div>
          </section>

          {/* Muhammadamin */}
        </div>
        <div className="col-4 p-5 bg-info"></div>
      </div>
    </div>
  );
};

export default Home;
