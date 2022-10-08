import React from 'react'
import Logo from '../../assets/Logo.svg'
import HeroImage from '../../assets/Hero.svg'
import '../../App.scss'

const Signin=()=> {
  return (
    <div className="w-full flex flex-wrap pt-20 mx-auto ">
      <div className="w-full lg:w-1/2">
        <div className=" ml-20">
          <img src={Logo} alt="Logo" className="mb-20" />
          <img src={HeroImage} alt="Logo" className="hidden lg:block" />
        </div>
      </div>
      <div className="lg:pl-20 w-full lg:w-1/2 ">
        <div className="w-full ">
          <div className="mb-10 ">
            <h2
              style={{ fontSize: "40px", color: "#213F7D" }}
              className="font-bold"
            >
              Welcome!
            </h2>
            <h4 className="pt-5 pb-6">Enter details to login.</h4>
          </div>
          <div className="w-full lg:w-4/5">
            <input type="text" className="w-full inputstyle" placeholder='Email' />
            <br />
            <div className="">
              <div className="flex my-5">
                <input
                  type="password"
                  placeholder='Password'
                  className="inputstyle w-full lg:w-5/6  rounded-lg"
                  style={{ borderRight: "0px", borderRadius: "5px 0 0 5px" }}
                />
                <div
                  style={{
                    borderLeft: "0px",
                    borderRadius: "0 5px 5px 0",
                    color: "#39CDCC",
                    verticalAlign:"center",
                    fontSize:"12px"
                  }}
                  className=" w-2/6 lg:w-1/5 inputstyle cursor-pointer text-center rounded-lg px-5 tert"
                >
                  SHOW
                </div>
              </div>
              <h4 className="my-5 tert">FORGOT PASSWORD?</h4>
            </div>
          </div>
          <button
            className=" w-full lg:w-4/5 my-5 p-3 rounded-lg text-white "
            style={{ background: "#39CDCC",outline:"none" }}
          >
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin