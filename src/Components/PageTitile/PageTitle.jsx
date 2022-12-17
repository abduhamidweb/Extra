import React from "react";
import Input from "../Input/Input";
import "./style.css";
const PageTitle = ({ input, title, date }) => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-6">
            <h2>{title}</h2>
            <p>{date ? date : ""}</p>
          </div>
          <div className="col-6 text-end">{input ? <Input /> : ""}</div>
        </div>
      </section>

    </>
  );
};

export default PageTitle;
