import React from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import SettingList from "../../Components/SettingList/SettingList";
import NavigateLinks from "../../Components/NavigateLinks/NavigateLinks"
import { Outlet } from "react-router-dom";


import "./style.scss";
import MainCard from "../../Components/MainCard/MainCard";
const Home = () => {
  return (
    <main>
      <div className="row">
        <div className="col-8">
          <PageTitle
            input={"input put"}
            title="Jaegar Resto"
            date="Tuesday, 2 Feb 2021"
          />
          <NavigateLinks/>
              <Outlet />
        
          {/* Muhammadamin */}
          <div className="row WrapperCard">
            <div className="col-6">
              <h3>Choose Dishes</h3>
            </div>
            <div className="col-6 text-end">
              <select name="" id="">
                <option>Dine In</option>
                <option>oaAwsnja</option>
                <option>csadkbhsd</option>
              </select>
            </div>
            <div className="row">
              <MainCard />
            </div>
          </div>
        </div>
        <div className="col-4 p-5 bg-info"></div>
      </div>
    </main>
  );

};
      

export default Home;
