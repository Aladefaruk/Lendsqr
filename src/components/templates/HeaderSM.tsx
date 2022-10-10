import React,{useState} from 'react'
import Logo from '../../assets/Logo.svg'
import Ham from '../../assets/hamburger.svg'
import Close from '../../assets/close.svg'
import Switch from "../../assets/template/switch.svg";
import Drop from "../../assets/template/shuffDrop.svg";
import Dash from "../../assets/template/dashboard.svg";
import Tab from './Tab.tsx';
import { Customers, Business, Settings } from "../../assets/template/index.tsx";
import { Link } from 'react-router-dom';

export default function HeaderSM() {
    const [isActive, setisActive] = useState(false);
    const [isCustomerActive, setIsCustomerActive]= useState(false)
    const [isBusinessActive, setIsBusinessActive] = useState(false)
    const [isSettingsActive, setIsSettingsActive] = useState(false);
    const [tabNo, setTabNo] = useState(0);
  return (
    <div>
      <div className="lg:hidden w-full px-5 py-5  flex justify-between items-center fixed left-0 right-0 top-0 z-20 bg-white">
        <img src={Logo} alt="logo" />
        <img
          src={!isActive ? Ham : Close}
          alt="hamburger-menu"
          className="w-7 h-7"
          onClick={() => setisActive(!isActive)}
        />
      </div>
      {isActive && (
        
        <div
          className="fixed w-full z-10 left-0  p  py-4 bg-white top-14 self-right pri"
          style={{ backgroundColor: "#FFFFFF" }}
        >
           <div className="flex px-5  my-5">
          <img
            alt="Switch Organization"
            src={Switch}
            width="16px"
            height="16px"
          />
          <p className="px-4 pri">Switch Organization</p>
          <img src={Drop} alt="dropdown" />
        </div>
        {/* <div className="mb-11">
          <Tab image={Dash} name="Dashboard" active={tabNo} key={100} />
        </div> */}
    
          
          <ul>
            <li
              className="cursor-pointer py-4 text-xl flex items-center"
              onClick={() => setIsCustomerActive(!isCustomerActive)}
            >
              <p className='uppercase px-5'>Customers</p> <img src={Drop} alt="" className="mx-3" />
            </li>
            <div>
              {isCustomerActive && (
                <div className="flex flex-col mb-10">
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
              )}
            </div>
            <li
              className="cursor-pointer py-4 text-xl flex items-center"
              onClick={() => setIsBusinessActive(!isBusinessActive)}
            >
              <p className='uppercase px-5'>BUSINESSES</p> <img src={Drop} alt="" className="mx-3" />
            </li>
            <div>
              {isBusinessActive && (
                <div className="flex flex-col mb-10">
                  {Object.values(Business).map((item, i) => (
                    <Tab
                      name={item.name}
                      image={item.image}
                      key={i}
                      index={i+10}
                      active={tabNo}
                      onClick={() => setTabNo(i+10)}
                    />
                  ))}
                </div>
              )}
            </div>
            <li
              className="cursor-pointer py-4 text-xl flex items-center"
              onClick={() => setIsSettingsActive(!isSettingsActive)}
            >
              <p className='uppercase px-5'>SETTINGS</p> <img src={Drop} alt="" className="mx-3" />
            </li>
            <div>
              {isSettingsActive && (
                <div className="flex flex-col mb-10">
                  {Object.values(Settings).map((item, i) => (
                    <Tab
                      name={item.name}
                      image={item.image}
                      key={i}
                      index={i+20}
                      active={tabNo}
                      onClick={() => setTabNo(i+20)}
                    />
                  ))}
                </div>
              )}
            </div>
          </ul>
          <Link to="/">
          <p className='px-5 my-5' style={{color:"red"}}>Log Out</p>
          </Link>
        </div>
      )}
    </div>
  );
}
