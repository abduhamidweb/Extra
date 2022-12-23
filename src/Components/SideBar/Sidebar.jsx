import React, { useRef } from "react";
import style from "./sidebar.module.scss";
import LogoMenu from "../../assets/Vector.svg";
import Logout from "../../assets/Vector.png";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <>
      <section className={style.Sidebar}>
        <div className={style.SidbarWrapper}>
          <ul className={style.navigation}>
            <li className={style.navigationItemLogo}>
              <img src={LogoMenu} className={style.LogoMenu} />
            </li>
            <SidebarItem link="/" icon="home" />
            <SidebarItem link="/percentage" icon="gitter" />
            <SidebarItem link="/database" icon="database" />
            <SidebarItem link="/news" icon="mail" />
            <SidebarItem link="/notification" icon="bell" />
            <SidebarItem link="/settings" icon="cog" />
            <li 
              className={style.navigationItemLogout}
              onClick={() =>
                localStorage.removeItem("userData")
              }
            >
              <img src={Logout} className={style.LogoMenu} />
            </li>
          </ul>
        </div>
      </section>
      <section className={style.smSidebar}>
        <div className={style.smSidebarWrapper}>
          <ul className={style.smNavigation}>
            <SidebarItem link="/percentage" icon="gitter" />
            <SidebarItem link="/database" icon="database" />
            <SidebarItem link="/" icon="home" />
            <SidebarItem link="/news" icon="mail" />
            <SidebarItem link="/notification" icon="bell" />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
