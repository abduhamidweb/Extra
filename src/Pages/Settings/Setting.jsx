import React from "react";
import SettingList from "../../Components/SettingList/SettingList";
import { Outlet } from "react-router-dom";
const Setting = () => {
  return (
    <div>
      <section className="settingLists">
        <SettingList
          link={"/appereance"}
          icon="bi bi-heart"
          title={"Appereance"}
          desc="Dark and Light mode, Font size"
        />
        <SettingList
          link={"/restaurant"}
          icon="bi bi-house-heart"
          title={"Your Restaurant"}
          desc="Dark and Light mode, Font size"
        />

        <SettingList
          link={"/management"}
          icon="bi bi-percent"
          title={"Products Management"}
          desc="Manage your product, pricing, etc"
        />
        <SettingList
          link={"/notification"}
          icon="bi bi-bell"
          title={"Notifications"}
          desc="Customize your notifications"
        />
        <SettingList
          link={"/security"}
          icon="bi bi-lock"
          title={"Securty"}
          desc="Configure Password, PIN, etc"
        />
        <SettingList
          link={"/about"}
          icon="bi bi-file-person"
          title={"About Us"}
          desc="Configure Password, PIN, etc"
        />
      </section>
      <Outlet />
    </div>
  );
};

export default Setting;
