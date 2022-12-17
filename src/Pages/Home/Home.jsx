import React from "react";
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
        <div className="col-4 p-5 bg-info"></div>
      </div>
    </div>
  );
};

export default Home;
