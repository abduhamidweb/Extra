import React from "react";
import PageTitle from "../../Components/PageTitile/PageTitle";
import Dashbaord from "../../Components/DashboardCard/DashboardTop";

const DataBase = () => {
  return (
    <>
      <div className="row">
        <div className="col-8">
                  <PageTitle title={"Dashboard"} date={"Tuesday 2 Feb, 2021"} />
                <Dashbaord/>
        </div>
              <div className="col-4">
                  
        </div>
      </div>
    </>
  );
};

export default DataBase;
