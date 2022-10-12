import React, { useEffect,useState } from "react";
import Box from "../components/Box";
import { Statistics } from "../assets/statistics/index";
import Template from "../components/templates/Template";
import { Link } from "react-router-dom";
import { Space, Table, Tag, Button, Popover } from "antd";
import type { ColumnsType } from "antd/es/table";
import FilterIcon from '../assets/filter.svg';
import KebabIcon from "../assets/kebab.svg";
import ViewIcon from "../assets/view.svg";
import BlacklistIcon from "../assets/blacklist.svg";
import ActivateIcon from "../assets/activate.svg"
import "antd/dist/antd.css";
import Moment from "react-moment";

const App = () => {
  const [allUsers,setAllUsers]= useState([])
    interface DataType {
      // key: string;
      org: any;
      userName: string;
      email: string;
      phone: string;
      date: string;
      // tags: string[];
    }

  const inactiveStyle = {
    background: "rgba(84, 95, 125, 0.06)",
    color: "rgba(84, 95, 125, 1)",
    borderRadius: "100px",
    fontSize:"14px"
  };
   const pendingStyle = {
     background: "rgba(233, 178, 0, 0.1)",
     color: "rgba(233, 178, 0, 1)",
     borderRadius: "100px",
   };
   const activeStyle = {
     background: "rgba(57, 205, 98, 0.06)",
     color: "rgba(57, 205, 98, 1)",
     borderRadius: "100px",
   };
    const disabledStyle = {
      background: "rgba(228, 3, 59, 0.06)",
      color: "rgba(228, 3, 59, 1)",
      borderRadius: "100px",
    };

    const content = (props:string)=>{
      
      return (
        <div className="rounded-lg sec font-semibold cursor-pointer">
          <Link
            to={`/user:${props["id"]}`}
            className="sec"
            onClick={() => localStorage.setItem('user',JSON.stringify(props))}
          >
          <div
            className="flex items-center "
            // onClick={() => localStorage.setItem("user", props)}
          >
            <img src={ViewIcon} alt="" />
            <span className="mx-3">View Details</span>
          </div>
          </Link>
          <div className="flex items-center my-2">
            <img src={BlacklistIcon} alt="" />
            <span className="mx-3">Blacklist User</span>
          </div>
          <div className="flex items-center ">
            <img src={ActivateIcon} alt="" />
            <span className="mx-3">Activate User</span>
          </div>
        </div>
      );
  }


  let UsersData=allUsers.map((user:string)=>
  {
    return {
    org:user['orgName'],
    userName:user['userName'],
    email:user['email'],
    phone:user['phoneNumber'],
    date:user['lastActiveDate'],
    fullUserData:user
  }})



  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex uppercase ">
          <span className="sec">Organization</span>{" "}
          <img src={FilterIcon} alt="" className="mx-2" />
        </span>
      ),
      dataIndex: "org",
      key: "org",
      render: (text) => <span className="sec">{text} </span>,
    },
    {
      title: (
        <span className="flex uppercase ">
          <span className="sec">Username</span>{" "}
          <img src={FilterIcon} alt="" className="mx-2" />
        </span>
      ),
      dataIndex: "userName",
      key: "userName",
      render: (text) => <span className="sec">{text} </span>,
    },
    {
      title: (
        <span className="flex uppercase ">
          <span className="sec">Email</span>{" "}
          <img src={FilterIcon} alt="" className="mx-2" />
        </span>
      ),
      dataIndex: "email",
      key: "email",
      render: (text) => <span className="sec">{text} </span>,
    },
    {
      title: (
        <span className="flex uppercase ">
          <span className="sec">PHONE NUMBER</span>{" "}
          <img src={FilterIcon} alt="" className="mx-2" />
        </span>
      ),
      dataIndex: "phone",
      key: "phone",
      render: (text) => <span className="sec ">{text} </span>,
    },
    {
      title: (
        <span className="flex uppercase ">
          <span className="sec">Date joined</span>{" "}
          <img src={FilterIcon} alt="" className="mx-2" />
        </span>
      ),
      dataIndex: "date",
      key: "date",
      render: (text, record) => (
        <p style={{}} className="flex justify-between sec">
          <Moment format="MMM Do, YYYY">{text}</Moment>
          <Moment format="hh:mm a">{text}</Moment>
        </p>
      ),
    },
    {
      title: (
        <span className="flex uppercase ">
          <span className="sec">Status</span>{" "}
          
          <img src={FilterIcon} alt="" className="mx-2" />
        </span>
      ),
      dataIndex: "userName",
      key: "date",
      render: (text, record) => (
        <Space size="middle" className="items-center">
          <div
            className="p-2 "
            style={
              text.length <= 8
                ? activeStyle
                : text.length <= 13
                ? inactiveStyle
                : text.length <= 15
                ? pendingStyle
                : disabledStyle
            }
          >
            {text.length <= 8
              ? "Active"
              : text.length <= 13
              ? "Inactive"
              : text.length <= 15
              ? "Pending"
              : "Blacklisted"}
          </div>
                <Popover placement="bottomRight"  content={content(record['fullUserData'])} trigger="click">

          <img src={KebabIcon} alt="" className="w-6 h-6" />
          </Popover>
        </Space>
      ),
    },
  ];


  const getAllUsers = async () => {
    try {
      const res = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`,
        {
          method: "GET",
          headers: {},
        }
      );
      const res_json = await res.json();
      
      if (!res.ok) {
        return console.log(res)
      }
      setAllUsers(res_json)
      
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="w-full h-full my-20 lg:my-10">
      <Link to="/user:1">
        <h1
          className="pri font-semibold mx-5 text-center lg:text-left"
          style={{ fontSize: "24px" }}
        >
          Users
        </h1>
      </Link>
      <div className="flex flex-wrap justify-around">
        {Object.values(Statistics).map((stat: Object, index: Number) => (
          <Box
            name={stat['name']}
            image={stat['image']}
            numbers={stat['stats']}
            key={index}
          />
        ))}
      </div>
      <div className="lg:mx-5">
        <Table
          columns={columns}
          dataSource={UsersData}
          scroll={{ x:"700" }}
         
          className="w-full"
        />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return <Template App={App} />;
};

export default Dashboard;
