import React from 'react'

 const Info=({topic,detail}:{topic:string,detail:string})=> {
  return (
    <div className="mx-10 my-5 sec">
      <p className=" my-3 uppercase" style={{ fontSize: "12px" }}>
        {topic}
      </p>
      <p className="font-semibold" style={{ fontSize: "16px" }}>
        {detail}
      </p>
    </div>
  );
}

export default Info