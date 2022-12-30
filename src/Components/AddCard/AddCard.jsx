import React from "react";
import "./index.scss";
const AddCard = ({ data: { id, img, title, price, bowis, category } }) => {
  return (
    <>
      <div className="col-4">
        <div className="card card-add">
          <img src={img} alt="(-_-)" className="card-imgs" />
          <div className="card-body">
            <p>{title}</p>
            <span className="card-price">
              {price} • {bowis}
            </span>
          </div>
          <button className="btn edit-dish" data-id={id}>
            <span className="btn-txt" data-id={id}>
              <i class="bi bi-pencil-square mx-1" data-id={id}></i>
              Edit dish
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCard;
