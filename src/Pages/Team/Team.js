import React from "react";
import image1 from "../../images/team-01.jpg";
import image2 from "../../images/team-02.jpg";
import image3 from "../../images/team-03.jpg";
import image4 from "../../images/team-06.jpg";

const Team = () => {
  return (
    <div className="team-area py-16">
      <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold mb-4 text-black">
        Managing Team
      </h2>
      <p className="mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
        There are many variations of passages of Lorem Ipsum available, but the{" "}
        majority have suffered alteration.
      </p>
      <div className="mt-3 mx-8 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-6  md:grid-cols-4 md:gap-8 md:mx-10 md:mt-12">
        <div className="team-itesm">
          <img src={image1} alt="" className="rounded-md shadow-xl" />
          <div className="text-left mt-4">
            <h2 className="text-black font-semibold">Jone Due</h2>
            <p className="text-[#1d1d24] mt-1">Sr. Web Developer</p>
            <div className="icon-box inline-flex gap-4 mt-1">
              <i className="fa-brands fa-facebook-f text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-linkedin-in text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-twitter text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-youtube text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
            </div>
          </div>
        </div>
        <div className="team-itesm">
          <img src={image2} alt="" className="rounded-md shadow-xl" />
          <div className="text-left mt-4">
            <h2 className="text-black font-semibold">Jone Due</h2>
            <p className="text-[#1d1d24] mt-1">Sr. Web Developer</p>
            <div className="icon-box inline-flex gap-4 mt-1">
              <i className="fa-brands fa-facebook-f text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-linkedin-in text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-twitter text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-youtube text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
            </div>
          </div>
        </div>
        <div className="team-itesm">
          <img src={image3} alt="" className="rounded-md shadow-xl" />
          <div className="text-left mt-4">
            <h2 className="text-black font-semibold">Jone Due</h2>
            <p className="text-[#1d1d24] mt-1">Sr. Web Developer</p>
            <div className="icon-box inline-flex gap-4 mt-1">
              <i className="fa-brands fa-facebook-f text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-linkedin-in text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-twitter text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-youtube text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
            </div>
          </div>
        </div>
        <div className="team-itesm">
          <img src={image4} alt="" className="rounded-md shadow-xl" />
          <div className="text-left mt-4">
            <h2 className="text-black font-semibold">Jone Due</h2>
            <p className="text-[#1d1d24] mt-1">Sr. Web Developer</p>
            <div className="icon-box inline-flex gap-4 mt-1">
              <i className="fa-brands fa-facebook-f text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-linkedin-in text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-twitter text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
              <i className="fa-brands fa-youtube text-[#1d1d24] text-sm cursor-pointer hover:text-[#f9004d] hover:duration-300 duration-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
