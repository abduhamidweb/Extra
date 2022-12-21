import React, { useState, useEffect, useRef, useContext } from "react";
import "../style.scss";
import MainCard from "../../../Components/MainCard/MainCard";
import Loading from "../../../Components/Loading/Loading";
import context from "../../../context/context";
const HotDishes = () => {
  const {
    lastData,
    loading,
    category,
    fetchCategoryName,
    pageNumber,
    paginate,
  } = useContext(context);
  // const {
  //   lastData,
  //   pageNumber,
  //   paginate,
  //   fetchByName,
  //   category,
  //   loading,
  //   categoryItem,
  //   } = useContext(context);
  // // All Category
  // const fetchCategory = async () => {
  //   const res = await API.getAllCategorys();
  //   setCategory(res.categories);
  //   setLoading(true);
  // };
  // // Category Items
  // const fetchCategoryName = async (Name) => {
  //   const res = await API.getFilterCategorys(Name);
  //   setCategoryItem(res.meals);
  //   setLoading(true);
  // };
  // // search
  // const fetchByName = async (name) => {
  //   const res = await API.searchByName(name);
  //   if (!res.meals) {
  //   } else {
  //     setCategoryItem(res.meals);
  //   }
  // };
  // // Pagination start

  // const [currentPage, setCurrentPage] = useState(1);

  // const [totalPage, setTotalPage] = useState(6);

  // const firstPage = currentPage * totalPage;

  // const lastPage = firstPage - totalPage;

  // const lastData = categoryItem.slice(lastPage, firstPage);

  // const paginate = (id) => {
  //   setCurrentPage(id);
  // };

  // const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(categoryItem.length / totalPage); i++) {
  //   pageNumber.push(i);
  // }

  // // Start fetch function
  // useEffect(() => {
  //   fetchCategory();
  //   fetchCategoryName("Seafood");
  //   // fetchByName("Arrabiata");

  //   // fetchByName("a")
  // }, []);
  return (
    <>
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
        <div className="row" >
          {loading ? (
            lastData.map((item, key) => {
              return <MainCard key={key} data={item} />;
            })
          ) : (
            <Loading />
          )}
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {pageNumber.map((pageEl) => {
              return (
                <li
                  className="page-item   rounded-5 mx-auto my-2"
                  onClick={() => paginate(pageEl)}
                >
                  <a className="page-link">{pageEl}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HotDishes;
