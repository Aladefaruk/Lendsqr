import React,{useState} from 'react'
import Template from "../components/templates/Template.tsx";
import Back from '../assets/back.svg'
import Details from '../components/Details.tsx'
import Info from "../components/Info.tsx";
import { Link } from 'react-router-dom';



const App=()=>{
  const [tabNo, setTabNo] = useState(0);
  const Tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  const PersonalInfo = [
    {
      title: "full Name",
      detail: "Grace Effiom",
    },
    {
      title: "Phone Number",
      detail: "07060780922",
    },
    {
      title: "Email Address",
      detail: "grace@gmail.com",
    },
    {
      title: "Bvn",
      detail: "07060780922",
    },
    {
      title: "Gender",
      detail: "Female",
    },
    {
      title: "Marital status",
      detail: "Single",
    },
    {
      title: "Children",
      detail: "None",
    },
    {
      title: "Type of residence",
      detail: "Parent’s Apartment",
    },
  ];

   const Education = [
     {
       title: "level of education",
       detail: "B.Sc",
     },
     {
       title: "employment status",
       detail: "Employed",
     },
     {
       title: "sector of employment",
       detail: "FinTech",
     },
     {
       title: "Duration of employment",
       detail: "2 years",
     },
     {
       title: "office email",
       detail: "grace@lendsqr.com",
     },
     {
       title: "Monthly income",
       detail: "₦200,000.00- ₦400,000.00",
     },
     {
       title: "loan repayment",
       detail: "40,000",
     },
   ];

   const Socials = [
     {
       title: "Twitter",
       detail: "@grace_effiom",
     },
     {
       title: "Facebook",
       detail: "Grace Effiom",
     },
     {
       title: "Instagram",
       detail: "@grace_effiom",
     },
    
   ];

   const Guarantor = [
     {
       title: "full Name",
       detail: "Debby Ogana",
     },
     {
       title: "Phone Number",
       detail: "07060780922",
     },
     {
       title: "Email Address",
       detail: "debby@gmail.com",
     },
     {
       title: "Relationship",
       detail: "Sister",
     },
   ];
    return (
      <div className=" w-full py-20 lg:p-8">
        <div className="cursor-pointer mb-10">
          <Link to="./dashboard" className="flex items-center">
            <img alt="" src={Back} className="" />
            <h2 className="sec mx-3">Back to Users</h2>
          </Link>
        </div>
        <div className="lg:flex justify-between">
          <h3
            style={{ fontSize: "24px" }}
            className="pri font-semibold "
          >
            User Details
          </h3>
          <div className="w-full lg:w-1/3 flex my-5 lg:my-0   ">
            <button
              className="lg:mx-5 text-center py-1 px-2 font-semibold rounded-lg text-sm"
              style={{ color: "#E4033B", border: "1px solid #E4033B" }}
            >
              BLACKLIST USER
            </button>
            <button
              className="text-center mx-5 lg:mx-0 py-1 px-2 font-semibold rounded-lg text-sm"
              style={{ color: "#39CDCC", border: "1px solid #39CDCC" }}
            >
              ACTIVATE USER
            </button>
          </div>
        </div>
        <div className="my-8">
          <Details />
        </div>
        <div
          style={{
            border: "1px solid rgba(33, 63, 125, 0.06)",
            boxSizing: "border-box",
            boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
            borderRadius: "4px",
          }}
          className="block lg:hidden"
        >
          {Tabs.map((tab, index) => (
            <div
              className="p-5 "
              key={index}
              style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.06)" }}
            >
              <Link to={(index==0)?`./details`:"./"}>
              <h1 className='pri'>{tab}</h1>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="py-4 lg:px-5 hidden lg:block"
          style={{
            border: "1px solid rgba(33, 63, 125, 0.06)",
            boxSizing: "border-box",
            boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
            borderRadius: "4px",
          }}
        >
          <div
            className="py-4"
            style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
          >
            <h1
              className="pri font-semibold mx-10"
              style={{ fontSize: "16px" }}
            >
              Personal Information
            </h1>
            <div className="flex flex-wrap">
              {PersonalInfo.map((item, index) => (
                <Info key={index} topic={item.title} detail={item.detail} />
              ))}
            </div>
          </div>
          <div
            className="py-4"
            style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
          >
            <h1
              className="pri font-semibold mx-10"
              style={{ fontSize: "16px" }}
            >
              Education and Employment
            </h1>
            <div className="flex flex-wrap">
              {Education.map((item, index) => (
                <Info key={index} topic={item.title} detail={item.detail} />
              ))}
            </div>
          </div>
          <div
            className="py-4"
            style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
          >
            <h1
              className="pri font-semibold mx-10"
              style={{ fontSize: "16px" }}
            >
              Socials
            </h1>
            <div className="flex flex-wrap">
              {Socials.map((item, index) => (
                <Info key={index} topic={item.title} detail={item.detail} />
              ))}
            </div>
          </div>
          <div
            className="py-4"
            style={{ borderBottom: "1px solid rgba(33, 63, 125, 0.1)" }}
          >
            <h1
              className="pri font-semibold mx-10"
              style={{ fontSize: "16px" }}
            >
              Guarantor
            </h1>
            <div className="flex flex-wrap">
              {Guarantor.map((item, index) => (
                <Info key={index} topic={item.title} detail={item.detail} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
const User=()=> {
  return (
    <Template App={App}/>
  );
}

export default User