import React from "react";

const TableTr = ({ data }) => {
  console.log(data);
  function cheskedStatus(a, b, d) {
    if (a) {
      return a;
    }
    if (b) {
      return b;
    }
    if (d) {
      return d;
    }
  }
  return (
    <>
      <tr>
        <td className="userIMag" scope="row">
          <span className="round">
            <i className={data.img}></i>
          </span>
          <span className="mx-2">{data.names}</span>
        </td>
        <td>
          <span className="userText">
            {data.text.substring(0, 15)}
          </span>
        </td>
        <td>
          <span className="userText">{data.price}</span>
        </td>
        <td>
          <span
            className={cheskedStatus(
              data.status === "Completed" ? "wait" : "",
              data.status === "Pending" ? "panding" : "",
              data.status === "Preparing" ? "preparing" : ""
            )}
          >
            {data.status === "Completed" ? data.status : ""}
            {data.status === "Preparing" ? data.status : ""}
            {data.status === "Pending" ? data.status : ""}
          </span>
        </td>
      </tr>
    </>
  );
};

export default TableTr;
