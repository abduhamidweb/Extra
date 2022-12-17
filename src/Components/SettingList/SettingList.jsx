import React from "react";
import { NavLink } from "react-router-dom";

const SettingList = ({ link, icon, title, desc }) => {
  return (
    <>
      <NavLink
        to={`/settings${link}`}
        className={({ isActive }) => (isActive ? "itemLinkActive" : "itemLink")}
      >
        <div className="ItemWrapper">
          <div className="iconWrapper">
            <i className={icon}></i>
          </div>
          <div className="textWrapper">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default SettingList;
