import React from 'react'
import { Link } from 'react-router-dom';
const Template=()=> {
  return (
    <div>
      <div className="fixed top-0 left-0 h-full py-8 left-side">
        <div className="flex justify-center mb-11">
          
        </div>
        <ul className="flex flex-col items-center">
          <li
            className="py-3 px-5 mb-8 text-1.5 w-40 h-12 rounded-md cursor-pointer"
            style={{
              color: "#0D152E",
        
            }}
          >
            <Link to="/">
              <img
                
                alt=""
                className="inline xl:w-6 xl:h-6 relative bottom-0.5 mr-2"
              />{" "}
              Explore
            </Link>
          </li>
          <li
            className="py-3 px-5 mb-8 text-1.5 w-40 h-12 rounded-md cursor-pointer"
            style={{
              color: "#0D152E",
             
            }}
          >
            <Link to="/profile">
              <img
               
                alt=""
                className="inline xl:w-6 xl:h-6 relative bottom-0.5 mr-2"
              />{" "}
              Profile
            </Link>
          </li>
          <li
            className="py-3 px-5 mb-8 text-1.5 w-40 h-12 rounded-md cursor-pointer"
            style={{
              color: "#0D152E",
             
            }}
          >
            <Link to="/fundraisers">
              <img
                
                alt=""
                className="inline xl:w-6 xl:h-6 relative bottom-0.5 mr-2"
              />{" "}
              Fundraisers
            </Link>
          </li>
          <li
            className="py-3 px-5 mb-8 text-1.5 w-40 h-12 rounded-md cursor-pointer"
            style={{
              color: "#0D152E",
              
            }}
          >
            <Link to="/wallet">
              <img
            
                alt=""
                className="inline xl:w-6 xl:h-6 relative bottom-0.5 mr-2"
              />{" "}
              Wallet
            </Link>
          </li>
          <li
            className="py-3 px-5 mb-8 text-1.5 w-40 h-12 rounded-md cursor-pointer"
            style={{
              color: "#0D152E",
             
            }}
          >
            <Link to="/">
              <img
             
                alt=""
                className="inline xl:w-6 xl:h-6 relative bottom-0.5 mr-2"
              />{" "}
              Messages
            </Link>
          </li>
          <li
            className="py-3 px-5 mb-8 text-1.5 w-40 h-12 rounded-md cursor-pointer"
            style={{
              color: "#0D152E",
              
            }}
          >
            <Link to="/">
              <img
             
                alt=""
                className="inline xl:w-6 xl:h-6 relative bottom-0.5 mr-2"
              />{" "}
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Template