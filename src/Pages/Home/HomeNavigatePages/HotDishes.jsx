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
import App from "../../../App";
const HotDishes = () => {
  const localdata = [];
  const [date2, setDate2]=useState([])
  const [filterBookmark, setFilterBookmark] = useState([]);
  const {
    lastData,
    loading,
    category,
    fetchCategoryName,
    pageNumber,
    paginate,
  } = useContext(context);
  function funcc() {
    const mainCard = document.querySelector(".row");
    mainCard.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("card") ||
        e.target.classList.contains("cardNameTitle") ||
        e.target.classList.contains("price") ||
        e.target.classList.contains("cardBowls") ||
        e.target.classList.contains("MainCardImg")
      ){
        // setCardIdd(e.target.getAttribute("data-id"));
        DataCardId(e.target.getAttribute("data-id"));
        // localStorage.setItem("data", JSON.stringify(foodData));
      }
    });
  }
  const DataCardId = async (ID) => {
    const res = await API.openById(ID);
    res.meals.forEach((item) => {
      localdata.push(item);
    });

    const newData = localdata.filter((item, index) => {
      return (
        index ===
        localdata.findIndex((obj) => {
          return item.idMeal === obj.idMeal;
        })
      );
    });
0
 
 
    localStorage.setItem("data", JSON.stringify(newData));
  };


  useEffect(() => {
    funcc();
  }, [API.openById()]);

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
        <div className="row">
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