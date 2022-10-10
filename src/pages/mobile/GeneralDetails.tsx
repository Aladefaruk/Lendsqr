import React from "react";
import Info from "../../components/Info.tsx";
import Template from "../../components/templates/Template.tsx";

const App = () => {
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
    <div className="my-20 lg:hidden">
      <h1 className="pri">General Details</h1>
      <div
        className="py-4 lg:px-5 "
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
          <h1 className="pri font-semibold mx-10" style={{ fontSize: "16px" }}>
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
          <h1 className="pri font-semibold mx-10" style={{ fontSize: "16px" }}>
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
          <h1 className="pri font-semibold mx-10" style={{ fontSize: "16px" }}>
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
          <h1 className="pri font-semibold mx-10" style={{ fontSize: "16px" }}>
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
};

export default function GeneralDetails() {
  return <Template App={App} />;
}
