import React, { useContext, useEffect, useState } from "react";
import Input from "../Input/Input";
import "./style.css";
import context from "../../context/context";
const PageTitle = ({ input, title, date, icon }) => {
  const [inputValue, setInputValue] = useState("");
  const { fetchByName } = useContext(context);
// fetchByName(inputValue)
  // console.log(fetchByName("a"));
  // fetchByName(inputValue)
  // fetchByName("a");
    // console.log(inputValue);

  useEffect(() => {
  },[])
  return (
    <>
      <section>
        <div className="row">
          <div className="col-6">
            <h2>{title}</h2>
            <p>{date ? date : ""}</p>
          </div>
          <div className="col-6 text-end">
            <div className="PageInputWrapper">
              {icon ? <i class={`bi ${icon}`}></i> : ""}
              {input ? (
                <input
                  type={"text"}
                  className="PageTitlt"
                  placeholder="Search for food, coffe, etc.."
                  // value={inputValue}
                  onChange={(e) => {
                    fetchByName(e.target.value)
                  }}
                />
              ) : (
                // <Input
                //   type={"text"}
                //   inputClass={"PageTitlt"}
                //   plece={"Search for food, coffe, etc.."}
                //   val={inputValue}
                //   setValue={setInputValue}
                // />
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
