import React, { useState, useEffect } from "react";
import Box from "../components/Box.tsx";
import { Statistics } from "../assets/statistics/index.tsx";
import Template from "../components/templates/Template.tsx";
import { Link } from "react-router-dom";

const App = () => {
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
      console.log(res_json);
      if (!res.ok) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(process.env.REACT_APP_API_KEY);

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
        {Object.values(Statistics).map((stat, index) => (
          <Box
            name={stat.name}
            image={stat.image}
            numbers={stat.stats}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return <Template App={App} />;
};

export default Dashboard;
