import React, {useRef, useEffect} from "react";
import "./style.scss";
const MainCard = ({ data: { strMeal, strMealThumb, idMeal } }) => {
  const card=useRef();


  return (

    <>
      <div className="col-4 text-center cardWrapper" ref={card}>

        <div className="card" data-id={idMeal}>
          <img src={strMealThumb} alt="img" className="img-fluid MainCardImg" data-id={idMeal}/>
          <div className="card-body">
            <h5 className="cardNameTitle" data-id={idMeal}>{strMeal.substring(0, 20) + ".."}</h5>
            <p className="price" data-id={idMeal}>$ 2.69</p>
            <p className="cardBowls" data-id={idMeal}>11 Bowls available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
