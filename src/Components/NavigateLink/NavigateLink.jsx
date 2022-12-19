import React from 'react';
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./NavigateLink.css"
const NavigateLink = ({ LinkItem, TitleItem }) => {
  return (
    <>
      <li className="item">
        <NavLink
          to={LinkItem}
          href="#"
          className={({ isActive }) =>
            isActive ? "activee home-links" : "link home-links"  }
        >
          {TitleItem}
        </NavLink>
      </li>
    </>
  );
};

export default NavigateLink;