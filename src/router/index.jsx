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
import Appetizer from "../Pages/Home/HomeNavigatePages/Appetizer";
import Colddishes from "../Pages/Home/HomeNavigatePages/Colddishes";
import Desert from "../Pages/Home/HomeNavigatePages/Desert";
import Grill from "../Pages/Home/HomeNavigatePages/Grill";
import HotDishes from "../Pages/Home/HomeNavigatePages/HotDishes";
import Soup from "../Pages/Home/HomeNavigatePages/Soup";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HotDishes />} />
          <Route path="colddishes" element={<Colddishes />} />
          <Route path="soup" element={<Soup />} />
          <Route path="grill" element={<Grill />} />
          <Route path="appetizer" element={<Appetizer />} />
          <Route path="desert" element={<Desert />} />
          <Route path="/" element={<HotDishes />} />
          <Route path="/colddishes" element={<Colddishes />} />
          <Route path="/soup" element={<Soup />} />
          <Route path="/grill" element={<Grill />} />
          <Route path="/appetizer" element={<Appetizer />} />
          <Route path="/desert" element={<Desert />} />
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
