import React,{useState} from "react";

import Switch from '../../assets/template/switch.svg';
import Drop from '../../assets/template/shuffDrop.svg';
import Dash from '../../assets/template/dashboard.svg';
import Tab from "./Tab";
import {Customers, Business,Settings} from '../../assets/template/index';


const LeftSide = () => {

  const [tabNo, setTabNo]=useState(0)
  return (
    <div
      className="fixed  left-0 h-full left-side pt-36  items-left hidden lg:block"
      style={{
        backgroundColor: "#FFFFF",
        boxSizing: "border-box",
        boxShadow: " 0px 5px 20px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div>
        <div className="flex px-8  mb-10">
          <img
            alt="Switch Organization"
            src={Switch}
            width="16px"
            height="16px"
          />
          <p className="px-4 pri">Switch Organization</p>
          <img src={Drop} alt="dropdown" />
        </div>
        <div className="mb-11">
          <Tab image={Dash} name="Dashboard" active={tabNo} key={100} index={100} onClick={()=>console.log('100')}/>
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <p className="sec mb-4 px-8" style={{ fontSize: "14px" }}>
          CUSTOMERS
        </p>
        {Object.values(Customers).map((item, i) => (
          <Tab
            name={item.name}
            image={item.image}
            key={i}
            index={i}
            active={tabNo}
            onClick={() => setTabNo(i)}
          />
        ))}
      </div>

      <div className="flex flex-col mb-10">
        <p className="sec mb-4 px-8" style={{ fontSize: "14px" }}>
          BUSINESS
        </p>
        {Object.values(Business).map((item, i) => (
          <Tab
            name={item.name}
            image={item.image}
            key={i}
            index={i + 10}
            active={tabNo}
            onClick={() => setTabNo(i + 10)}
          />
        ))}
      </div>

      <div className="flex flex-col mb-10">
        <p className="sec mb-4 px-8" style={{ fontSize: "14px" }}>
          SETTINGS
        </p>
        {Object.values(Settings).map((item, i) => (
          <Tab
            name={item.name}
            image={item.image}
            key={i}
            index={i + 20}
            active={tabNo}
            onClick={() => setTabNo(i + 20)}
          />
        ))}
      </div>
    </div>
  );
};
export default LeftSide;
