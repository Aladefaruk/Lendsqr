import React from 'react'
import { Link } from 'react-router-dom';
import LeftSide from './LeftSideBar.tsx';
import HeaderLG from './HeaderLG.tsx';
import HeaderSM from './HeaderSM.tsx';


const Template=({App})=> {
  return (
    <div className="">
      <div className="block">
        <div className="hidden lg:block">
          <HeaderLG />
        </div>
        <div className=" block lg:hidden">
          <HeaderSM />
          <div>
            <App/>
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
}
export default Template