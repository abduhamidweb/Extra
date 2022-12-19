import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/SideBar/Sidebar";
import Router from "./router";
const App = () => {
  return (
    <>
      <div className="ALL_SECTION_WRAPPER">
        <section>
          <Sidebar />
        </section>
        <main>
          <Router />
        </main>
      </div>
    </>
  );
};

export default App;
