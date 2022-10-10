import React, { useState } from "react";
import Avatar from "../assets/avatar.svg";
import FilledStar from "../assets/filledStar.svg";
import Star from "../assets/star.svg";

const User = () => {
  const [tabNo, setTabNo] = useState(0);
  const Tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  const activeStyle = {
    color: "#39CDCC",
    borderBottom: "2px solid #39CDCC",
  };
  const inactiveStyle = {
    color: "black",
  };
  return (
    <div
      className="w-full px-5 pt-3 "
      style={{
        border: "1px solid rgba(33, 63, 125, 0.06)",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        boxSizing: "border-box",
        paddingBottom: "-12px",
        borderRadius: "4px",
      }}
    >
      <div className="flex flex-wrap mb-12">
        <div className="flex">
        <div className="flex items-center mx-5">
          <img src={Avatar} alt="" />
          <div className="mx-5">
            <h2 className="font-semibold pri " style={{ fontSize: "22px" }}>
              Grace Effiom
            </h2>
            <p className="sec" style={{ fontSize: "14px" }}>
              LSQFf587g90
            </p>
          </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "1px solid rgba(84, 95, 125, 0.2)",
            borderRight: "1px solid rgba(84, 95, 125, 0.2)",
          }}
          className="items-center px-5"
        >
          <div className="my-6">
            <p className="mx-2">User's Tier</p>
            <div className="flex m-auto">
              {[1, 2, 3].map((item, index) => (
                <img
                  alt=""
                  className="mx-2"
                  src={item == 1 ? FilledStar : Star}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="items-center my-5 mx-7">
          <p className="font-semibold pri " style={{ fontSize: "22px" }}>
            ₦200,000.00
          </p>
          <p className="sec" style={{ fontSize: "14px" }}>
            9912345678/Providus Bank
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-around hidden lg:flex items-start">
          {Tabs.map((tab, index) => (
            <div
              className="p-2 cursor-pointer"
              key={index}
              onClick={() => setTabNo(index)}
              style={index == tabNo ? activeStyle : inactiveStyle}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
