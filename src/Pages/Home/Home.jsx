import React, { useState, useEffect, useRef } from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import SettingList from "../../Components/SettingList/SettingList";
import "./style.scss";
import MainCard from "../../Components/MainCard/MainCard";
import API from "../../API/API";
import Loading from "../../Components/Loading/Loading";
import context from "../../context/context";
const Home = () => {
  const [category, setCategory] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState("Test");
  const ErrorPage = useRef();
  // All Categorys
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

  // Start fetch function
  useEffect(() => {
    fetchCategory();
    fetchCategoryName("Seafood");
    // fetchByName("Arrabiata");

    // fetchByName("a")
  }, []);
  return (
    <>
      <context.Provider value={{ fetchByName }}>
        <main>
          <div className="row">
            <div className="col-8 WrapperLeftPage">
              <PageTitle
                input={"input put"}
                title="Jaegar Resto"
                date="Tuesday, 2 Feb 2021"
                icon="bi-search"
              />

              {/* Muhammadamin */}
              <div className="row WrapperCard">
                <div className="col-6">
                  <h3>Choose Dishes</h3>
                </div>
                <div className="col-6 text-end ">
                  <div className="select text-end">
                    <select
                      name=""
                      id=""
                      onChange={(e) => {
                        fetchCategoryName(e.target.value);
                      }}
                    >
                      {category.map((item, key) => {
                        return <option>{item.strCategory}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="row" ref={ErrorPage}>
                  {loading ? (
                    categoryItem.map((item, key) => {
                      return <MainCard key={key} data={item} />;
                    })
                  ) : (
                    <Loading />
                  )}
                </div>
              </div>
            </div>
            <div className="col-4 p-5 bg-info"></div>
          </div>
        </main>
      </context.Provider>
    </>
  );
};

export default Home;
