import React from "react";
import "./Clients.css";
import CountUp from "react-countup";

const Clients = () => {
  return (
    <div className="clients-area bg-[#F8F9FC] py-20">
      <div className="clients-images py-32">
        <div className="img-overlay"></div>
        <div className="grid grid-cols-1 gap-2 mx-3 md:grid-cols-3 md:gap-10 md:mx-8">
          <div className="couter-main z-50">
            <h1 className="text-7xl text-white font-bold mb-5">
              <CountUp start={0} end={165} duration={5} />+
            </h1>
            <p className="text-[18px] text-white ">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="couter-main z-50">
            <h1 className="text-7xl text-white font-bold mb-5">
              <CountUp start={0} end={575} duration={5} />+
            </h1>
            <p className="text-[18px] text-white ">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="couter-main z-50">
            <h1 className="text-7xl text-white font-bold mb-5">
              <CountUp start={0} end={100} duration={5} />+
            </h1>
            <p className="text-[18px] text-white ">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
