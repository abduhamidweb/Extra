import React, { useContext, useEffect, useState } from "react";
import Input from "../Input/Input";
import "./style.css";
import context from "../../context/context";
import HotDishes from "../../Pages/Home/HomeNavigatePages/HotDishes";
const PageTitle = ({ input, title, date, icon }) => {
  const [inputValue, setInputValue] = useState("");
  const { fetchByName } = useContext(context);

  return (
    <>
      <section>
        <div className="row">
          <div className="col-6">
            <h2>{title}</h2>
            <p>{date ? date : ""}</p>
          </div>
          <div className="col-6 text-end">
            { icon ? 
              <div className="PageInputWrapper">
                <i className={`bi ${icon}`}></i> 
                  <input
                    type={"text"}
                    className="PageTitlt"
                    placeholder="Search for food, coffe, etc.."
                    // value={inputValue}
                    onChange={(e) => {
                      fetchByName(e.target.value);
                    }}
                  />
              </div> : ""
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
