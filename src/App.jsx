import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import API from "./API/API";
import context from "./context/context";
import Sidebar from "./Components/SideBar/Sidebar";
import Router from "./router";
import "./App.css";
const App = () => {

  function func(text){
    console.log(text);
  }
  const [category, setCategory] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState("Test");
  // All Category
  const fetchCategory = async () => {
    const res = await API.getAllCategorys();
    setCategory(res.categories);
    setLoading(true);
  };
  // Category Items
  const fetchCategoryName = async (Name) => {
    const res = await API.getFilterCategorys(Name);
    setCategoryItem(res.meals);
    setLoading(true);
  };
  // search
  const fetchByName = async (name) => {
    const res = await API.searchByName(name);
    if (!res.meals) {
    } else {
      setCategoryItem(res.meals);
    }
  };
  // Pagination start

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPage, setTotalPage] = useState(6);

  const firstPage = currentPage * totalPage;

  const lastPage = firstPage - totalPage;

  const lastData = categoryItem.slice(lastPage, firstPage);

  const paginate = (id) => {
    setCurrentPage(id);
  };

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(categoryItem.length / totalPage); i++) {
    pageNumber.push(i);
  }

  // Start fetch function
  useEffect(() => {
    fetchCategory();
    fetchCategoryName("Seafood");
    // fetchByName("Arrabiata");

    // fetchByName("a")
  }, []);

  return (

    <>
      <context.Provider
        value={{
          lastData,
          pageNumber,
          paginate,
          fetchByName,
          fetchCategoryName,
          category,
          loading,
          categoryItem,
        }}
      >
        <div className="ALL_SECTION_WRAPPER">
          <section>
            <Sidebar />
          </section>
          <main>
            <Router />
          </main>
        </div>
      </context.Provider>
    </>
  );
};
export default App;
