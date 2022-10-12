import React from "react";

export default function Tab({
  image,
  active,
  name,
  index,
  onClick,
}: {
  image: string;
  active: number;
  name: string;
  index: number;
  onClick: Function;
}) {
  const activeStyle = {
    color: "#213F7D",
    borderLeft: "3px solid #39CDCC",
    backgroundColor: "rgba(57, 205, 204, 0.1)",
  };
  const inactiveStyle = {
    opacity: 0.7,
  };

  return (
    <div
      className="flex items-center  my-2 px-8 py-2 cursor-pointer"
      style={active === index ? activeStyle : inactiveStyle}
      onClick={() => onClick()}
    >
      <img alt="" src={image} className="" />
      <div className="px-4 pri-2">{name}</div>
    </div>
  );
}
