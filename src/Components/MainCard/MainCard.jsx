import React from "react";
import "./style.scss";
const MainCard = () => {
  return (
    <>
      <div className="col-4 text-center cardWrapper">
        <div className="card">
          <img
            src="https://picsum.photos/150/150"
            alt="img"
            className="img-fluid MainCardImg"
          />
          <div className="card-body">
            <h5>Spicy seasoned seafood noodles</h5>
            <p className="price">$ 2.69</p>
            <p>11 Bowls available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
