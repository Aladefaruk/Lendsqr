import React from 'react'
import { Headers } from '../../assets/Headers/index.tsx'

export default function HeaderLG() {
  return (
    <div className="w-full flex justify-between items-center headerContainer px-7  py-8">
      <div className="w-1/2 flex justify-between">
        <img src={Headers.Logo} />
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
            className="w-1/5 headerInput item-center items-center sec "
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
              className="w-5 h-5 my-2  m-auto"
              style={{ backgroundColor: "#39CDCC" }}
            />
          </span>
        </div>
      </div>

      <div className="w-2/6 flex justify-evenly items-center">
        <div style={{fontSize:"16px", textDecoration:"underline"}} className="pri">Docs</div>
        <img src={Headers.Bell} alt="bell" />
        <div className='flex items-center justify-center'>
        <img src={Headers.ProfilePicture} alt="profile picture" />
        <h1 className='mx-2 pri'> Adedeji</h1>
        <img src={Headers.DropDown}/>
        </div>
      </div>
    </div>
  );
}
