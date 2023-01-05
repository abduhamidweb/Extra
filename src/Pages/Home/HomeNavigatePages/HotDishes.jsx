import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import "../style.scss";
import API from "../../../API/API";
import MainCard from "../../../Components/MainCard/MainCard";
import Loading from "../../../Components/Loading/Loading";
import context from "../../../context/context";
const HotDishes = () => {
  // start
  const {
    lastData,
    loading,
    category,
    fetchCategoryName,
    pageNumber,
    paginate,
    fetchById,
  } = useContext(context);

  return (
    <>
      <div className="row WrapperCard">
        <div className="col-6">
          <h3>Choose Dishes</h3>
        </div>
        <div className="col-6 text-end">
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
        <div
          className="row mt-4"
          onClick={(e) => {
            fetchById(e.target.getAttribute("data-id"));
          }}
        >
          {loading ? (
            lastData.map((item, key) => {
              return <MainCard key={key} data={item} />;
            })
          ) : (
            <Loading />
          )}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
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
