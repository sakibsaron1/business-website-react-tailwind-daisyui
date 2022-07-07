import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-area py-20">
      <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold mb-4 text-black">
        Pricing Plan
      </h2>
      <p className="mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 mt-3 sm:mt-14 sm:mx-5 md:grid-cols-3 md:gap-8 md:mx-10 md:mt-14">
        <div className="mx-4 mb-4 py-12 pricing-main border-2 border-[#F63D48] rounded-md duration-500">
          <h5 className="free text-xl font-semibold">Free</h5>
          <h1 className="transition duration-1000 price text-8xl text-[#F71D0A] mt-8 mb-1">
            29
          </h1>
          <h1 className="transition duration-1000 month text-sm text-[#EF0964]">
            USD Per Month
          </h1>

          <div className="pricing-details mt-10">
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i> 5
              PPC Campaigns
            </p>
            <div className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              Digital Marketing
            </div>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              Marketing Agency
            </p>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i> Seo
              Friendly
            </p>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              UI/UX designs
            </p>
          </div>
          <div className="pricing-button mt-12">
            <Link
              to=""
              className="btn-vejal border-2 border-[#F63D48] py-2 px-5 rounded-md"
            >
              PURCHASE NOW
            </Link>
          </div>
        </div>
        <div className="mx-4 mb-4 py-12 pricing-main border-2 border-[#F63D48] rounded-md duration-500">
          <h5 className="free text-xl font-semibold">Free</h5>
          <h1 className="transition duration-1000 price text-8xl text-[#F71D0A] mt-8 mb-1">
            29
          </h1>
          <p className="transition duration-1000 month text-sm text-[#EF0964]">
            USD Per Month
          </p>

          <div className="pricing-details mt-10">
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i> 5
              PPC Campaigns
            </p>
            <div className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              Digital Marketing
            </div>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              Marketing Agency
            </p>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i> Seo
              Friendly
            </p>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              UI/UX designs
            </p>
          </div>
          <div className="pricing-button mt-12">
            <Link
              to=""
              className="btn-vejal border-2 border-[#F63D48] py-2 px-5 rounded-md"
            >
              PURCHASE NOW
            </Link>
          </div>
        </div>
        <div className="mx-4 mb-4 py-12 pricing-main border-2 border-[#F63D48] rounded-md duration-500">
          <h5 className="free text-xl font-semibold">Free</h5>
          <h1 className="transition duration-1000 price text-8xl text-[#F71D0A] mt-8 mb-1">
            29
          </h1>
          <p className="transition duration-1000 month text-sm text-[#EF0964]">
            USD Per Month
          </p>

          <div className="pricing-details mt-10">
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i> 5
              PPC Campaigns
            </p>
            <div className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              Digital Marketing
            </div>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              Marketing Agency
            </p>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i> Seo
              Friendly
            </p>
            <p className="mt-4">
              <i class="fa-regular fa-circle-check text-[#EF0964] mr-1"></i>
              UI/UX designs
            </p>
          </div>
          <div className="pricing-button mt-12">
            <Link
              to=""
              className="btn-vejal border-2 border-[#F63D48] py-2 px-5 rounded-md"
            >
              PURCHASE NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
