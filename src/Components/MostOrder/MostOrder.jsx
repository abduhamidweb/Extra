import React from "react";
import "./MostOrder.scss";
const MostOrder = ({ data: { MostImg, MostTitle, MostDescription } }) => {
  return (
    <>
      <div className="MostOrderInfo d-flex">
        <div className="MostOrderInfo__img">
          <img src={MostImg} alt="img" />
        </div>
        <div className="MostOrderInfo__texts">
          <h4 className="m-0 p-0">{MostTitle}</h4>
          <p className="m-0 p-0">{MostDescription}</p>
        </div>
      </div>
    </>
  );
};

export default MostOrder;
