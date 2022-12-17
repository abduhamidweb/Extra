import React from "react";
import { Routes, Route } from "react-router-dom";
import DataBase from "../Pages/DataBase/DataBase";
import Home from "../Pages/Home/Home";
import About from "../Pages/Settings/Settings/About";
import Appereance from "../Pages/Settings/Settings/Appereance";
import Management from "../Pages/Settings/Settings/Management";
import Restaurant from "../Pages/Settings/Settings/Restaurant";
import Security from "../Pages/Settings/Settings/Security";
import Notification from "../Pages/Settings/Settings/Notification";
import News from "../Pages/News/News";
import Notif from "../Pages/Notif/Notif";
import Percent from "../Pages/Percentage/Persen";
import Setting from "../Pages/Settings/Setting";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/orders" element={<Home />}>
          
        </Route>
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/percentage" element={<Percent />}></Route>
        <Route path="/database" element={<DataBase />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/notification" element={<Notif />}></Route>
        <Route path="/settings" element={<Setting />}>
          <Route path="/settings/appereance" element={<Appereance />}></Route>
          <Route path="/settings/restaurant" element={<Restaurant />}></Route>
          <Route path="/settings/management" element={<Management />}></Route>
          <Route path="/settings/security" element={<Security />}></Route>
          <Route
            path="/settings/notification"
            element={<Notification />}
          ></Route>
          <Route path="/settings/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default index;
