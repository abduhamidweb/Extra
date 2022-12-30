import React from "react";
import style from "./sidebar.module.scss";
import { Link, NavLink } from "react-router-dom";
const SidebarItem = ({ link, icon, realIcon }) => {
  return (
    <>
      <li className={style.navigationItem}>
        <NavLink
          to={link}
          className={({ isActive }) =>
            isActive ? style.activeItem : style.navigationLink
          }
        >
          <div className={style.iconWrapper}>
            <span
              uk-icon={`icon:${icon}; ratio:1.1;`}
              className={style.navigationIcon}
            ></span>
          </div>
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItem;
