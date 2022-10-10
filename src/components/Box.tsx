import React from "react";


export default function Box({ name, image, numbers }:{name:string,image:string,numbers:number}) {
  return (
    <div
      style={{
        width: "240px",
        height: "160px",
        border: " 1px solid rgba(33, 63, 125, 0.06)",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: "4px",
      }}
      className="py-5 px-6 my-6"
    >
      <img alt="" src={image} />

      <p className="sec font-semibold " style={{ fontSize: "14px" }}>
        {name}
      </p>

      <p style={{ fontSize: "24px" }} className="font-bold pri">
        {numbers}
      </p>
    </div>
  );
}
