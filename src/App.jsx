import React from 'react';
import { useParams } from 'react-router-dom';

import "./App.css"
import Sidebar from './Components/SideBar/Sidebar';
import Router from "./router"
import "./App.css";
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
