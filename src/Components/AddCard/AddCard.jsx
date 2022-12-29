import React from "react";
import "./index.scss";
const AddCard = ({ data: { id, img, title, price, bowis, category } }) => {
  return (
    <>
      <div className="col-4">
        <div className="card card-add">
          <img src={img} alt="img" className="card-imgs" />
          <div className="card-body">
            <p>{title}</p>
            <span className="card-price">
              {price} • {bowis}
            </span>
          </div>
          <button className="btn edit-dish">
            <span className="btn-txt">
              <i class="bi bi-pencil-square mx-1"></i>
              Edit dish
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
