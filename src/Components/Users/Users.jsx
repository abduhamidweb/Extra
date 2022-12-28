import React from 'react';
import TableTr from '../TableTr/TableTr';
import "./style.scss"
const Users = () => {
      const users = [
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Completed",
          price: "$125",
          names: "Eren Jaegar",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Preparing",
          price: "$1452",
          names: "Jek",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Pending",
          price: "$45",
          names: "Jaegar",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Completed",
          price: "$95",
          names: "lady",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafoo ",
          status: "Pending",
          price: "$45",
          names: "sojdn",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Completed",
          price: "$125",
          names: "Eren Jaegar",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Preparing",
          price: "$1452",
          names: "Jek",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Pending",
          price: "$45",
          names: "Jaegar",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafood noodles ",
          status: "Completed",
          price: "$95",
          names: "lady",
        },
        {
          img: "bi bi-person",
          text: "Spicy seasoned seafoo ",
          status: "Pending",
          price: "$45",
          names: "sojdn",
        },
      ];
    return (
      <>
        <div className="row mt-3 userPromis">
          <div className="col-12 userSorts">
            <h2>Order Report</h2>
            <button className="btn">
              <i className="bi bi-filter"></i>
              <span className="ms-2">Filter Order</span>
            </button>
          </div>
          <div className="col-12 table-responsive-sm table-responsive-md table-responsive-lg tableWrapper">
            <div className="table-striped ">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Menu</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => {
                    return <TableTr data={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
};

export default Users;