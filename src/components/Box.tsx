import React from 'react';
import Savings from "../assets/statistics/savings.svg"

export default function Box({name,image,numbers}) {
  return (
    <div
      style={{
        width: "240px",
        height: "160px",
        border: " 1px solid red",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: "4px",
      }}
      className="py-5 px-6"
    >
      <img alt="" src={Savings} />
      {/* <p>{name}</p> */}
      <p className="sec font-semibold " style={{ fontSize: "14px" }}>
        USERS
      </p>
      {/* <p style={{ fontSize: "24px" }} className="font-semibold pri">
        {numbers}
      </p> */}
      <p style={{ fontSize: "24px" }} className="font-bold pri">
        2,453
      </p>
    </div>
  );
}
