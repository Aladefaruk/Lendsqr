import React from 'react'
import { Link } from 'react-router-dom';
import LeftSide from './LeftSideBar.tsx';
import HeaderLG from './HeaderLG.tsx';
const Template=({App})=> {
  return (
    <div className="w-full">
      <div className="block">
        
          <HeaderLG />
        <div className="w-full">
          <LeftSide />
          <div className="other-side pt-28">
            <div>
              DASHfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Template