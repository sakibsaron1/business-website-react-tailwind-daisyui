import React from "react";
import image1 from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area bg-[#1E1F25] py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 md:grid-cols-3 md:gap-8 sm:mx-10 md:mx-10">
        <div className="footer-items mx-auto sm:mx-0 md:mx-0">
          <img src={image1} alt="" />
        </div>
        <div className="footer-items mx-auto mt-4 sm:mx-0 md:mx-0">
          <div className="footer-icons flex justify-items-center gap-5">
            <div className="icon cursor-pointer">
              <i className="fa-brands fa-facebook-f text-sm cursor-pointer"></i>
            </div>
            <div className="icon cursor-pointer">
              <i className="fa-brands fa-linkedin-in text-sm cursor-pointer"></i>
            </div>
            <div className="icon cursor-pointer">
              <i className="fa-brands fa-twitter text-sm cursor-pointer"></i>
            </div>
            <div className="icon cursor-pointer">
              <i className="fa-brands fa-youtube text-sm cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="footer-items mx-auto mt-4 sm:mx-0 md:mx-0">
          <p className="text-[#c6c9d8] text-sm">
            Copyright © 2022 Sakib Ahmed Saron. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
