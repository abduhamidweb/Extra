import React from "react";
import "./styleTop.scss";
const Dashbaord = ({
  iconInfo,
  foiz,
  arrowIcon,
  CardPrice,
  CardTotol,
  iconInfoColor,
  foizColor,
  arrowColor,
  bgIcon,
}) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="DashboardCard">
          <div className="cardInfo">
            <span className="icon_info ">
              <i className={iconInfo} style={{ color: iconInfoColor }}></i>
            </span>
            <span className="card-foiz" style={{ color: foizColor }}>
              {foiz}
            </span>
            <span className="arrow-icon" style={{ background: bgIcon }}>
              <i className={arrowIcon} style={{ color: arrowColor }}></i>
            </span>
          </div>
          <div className="cardPrise">
            <span>{CardPrice}</span>
          </div>
          <div className="card-totol">
            <span>{CardTotol}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbaord;
