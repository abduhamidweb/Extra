import React from "react";
import "./style.scss";
const MainCard = ({ data: { strMeal, strMealThumb, idMeal } }) => {
  return (
    <>
      <div className="col-4 text-center cardWrapper">
        <div className="card">
          <img src={strMealThumb} alt="img" className="img-fluid MainCardImg" />
          <div className="card-body">
            <h5>{strMeal.substring(0, 12) + ".."}</h5>
            <p className="price">$ 2.69</p>
            <p>11 Bowls available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
