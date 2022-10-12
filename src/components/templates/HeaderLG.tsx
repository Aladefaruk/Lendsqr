import React from "react";
import { Link } from "react-router-dom";
import { Headers } from "../../assets/Headers/index";

export default function HeaderLG() {
  return (
    <div className="w-full flex justify-between items-center headerContainer px-7 py-8 fixed z-10">
      <div className="w-1/2 flex justify-between">
        <Link to="/">
          <img src={Headers.Logo} alt="" className="cursor-pointer" />
        </Link>
        <div className="flex w-1/2">
          <input
            className="headerInput w-full px-3 sec"
            placeholder="Search for anything"
            style={{
              borderRadius: "8px 0 0 8px",
              borderRight: "0",
              //   opacity: "0.2",
            }}
          />
          <span
            className="w-1/5 headerInput item-center cursor-pointer items-center sec "
            style={{
              borderRadius: "0 8px 8px 0",

              borderLeft: "0",
              verticalAlign: "middle",
              //   opacity: 0.2,
              backgroundColor: "#39CDCC",
              alignItems: "center",
            }}
          >
            <img
              src={Headers.Search}
              alt=""
              className="my-2.5  m-auto"
              width="14px"
              height="14px"
              style={{ backgroundColor: "#39CDCC" }}
            />
          </span>
        </div>
      </div>

      <div className="w-2/6 flex justify-evenly items-center ">
        <div
          style={{ fontSize: "16px", textDecoration: "underline" }}
          className="pri cursor-pointer"
        >
          Docs
        </div>
        <img src={Headers.Bell} alt="bell" className="cursor-pointer" />
        <div className="flex items-center justify-center cursor-pointer">
          <img src={Headers.ProfilePicture} alt="profile" />
          <h1 className="mx-2 pri font-semibold"> Adedeji</h1>
          <img src={Headers.DropDown} alt="" />
        </div>
      </div>
    </div>
  );
}
