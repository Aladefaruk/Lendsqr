import React, { useEffect,useState } from "react";
import Box from "../components/Box";
import { Statistics } from "../assets/statistics/index";
import Template from "../components/templates/Template";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import FilterIcon from '../assets/filter.svg';
import "antd/dist/antd.css";

const App = () => {
  const [allUsers,setAllUsers]= useState([])


  let UsersData=allUsers.map((user,index)=>
  {
    return {
    org:user.orgName,
    userName:user.userName,
    email:user.email,
    phone:user.phoneNumber,
    date:user.lastActiveDate,
    fullUserData:user
  }})

  console.log(allUsers);
  console.log(UsersData);
  interface DataType {
    // key: string;
    org: any;
    userName: string;
    email: string;
    phone: string;
    date: string;
    // tags: string[];
  }

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
      render: (text) => <span className="sec">{text} </span>,
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
      
    },
    // {
    //   title: "Status",
    //   key: "status",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite </a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  // const data: DataType[] = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sidney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];
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
            name={stat.name}
            image={stat.image}
            numbers={stat.stats}
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
