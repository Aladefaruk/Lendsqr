import React from "react";
import LeftSide from "./LeftSideBar";
import HeaderLG from "./HeaderLG";
import HeaderSM from "./HeaderSM";

const Template = ({ App }: { App: Function }) => {
  return (
    <div className="">
      <div className="block">
        <div className="hidden lg:block">
          <HeaderLG />
        </div>
        <div className=" block lg:hidden">
          <HeaderSM />
          <div>
            <App />
          </div>
        </div>
        <div className="hidden lg:block w-full h-full">
          <div className="block w-full left-side">
            <LeftSide />
          </div>

          <div className="other-side pt-28">
            <App />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
