import React from "react";
import "./Services.css";
import image1 from "../../images/corporate-01.jpg";
import image2 from "../../images/corporate-02.jpg";
import image3 from "../../images/corporate-03.jpg";

const Services = () => {
  return (
    <div className="services-area bg-[#F8F9FC] py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 mx-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-6">
          <div className="service-itesm text-left">
            <h2 className="text-6xl font-bold mb-4 decoration-black">
              Services
            </h2>
            <p className="mb-8 text-xl">
              There are many variations of passages of Lorem Ipsum available,
              but.
            </p>
            <div className="design-impo hover-items">
              <p className="font-medium mb-2 text-items cursor-pointer">
                Request Custom Service
              </p>
              <div className="design h-0.5 w-10 bg-[#f9004d]"></div>
            </div>
          </div>

          <div className="service-itesm text-left">
            <div className="service-image mb-6">
              <img src={image1} alt="" className="rounded-md w-full" />
            </div>
            <div className="service-details">
              <h4 className="transition duration-300 text-xl font-semibold mb-3 hover:text-[#f9004d] hover:duration-300">
                Thinking Development
              </h4>
              <p className="mb-4 text-base">
                I throw myself down among the tall grass by the stream
              </p>
              <div className="design-impo hover-items">
                <p className="font-medium mb-2 text-items cursor-pointer">
                  Read More
                </p>
                <div className="design2 h-0.5 w-10 bg-[#f9004d]"></div>
              </div>
            </div>
          </div>

          <div className="service-itesm text-left">
            <div className="service-image mb-6">
              <img src={image2} alt="" className="rounded-md w-full" />
            </div>
            <div className="service-details">
              <h4 className="transition duration-300 text-xl font-semibold mb-3 hover:text-[#f9004d] hover:duration-300">
                Business Consulting
              </h4>
              <p className="mb-4 text-base">
                I throw myself down among the tall grass by the stream
              </p>
              <div className="design-impo hover-items">
                <p className="font-medium mb-2 text-items cursor-pointer">
                  Read More
                </p>
                <div className="design2 h-0.5 w-10 bg-[#f9004d]"></div>
              </div>
            </div>
          </div>

          <div className="service-itesm text-left">
            <div className="service-image mb-6">
              <img src={image3} alt="" className="rounded-md w-full" />
            </div>
            <div className="service-details">
              <h4 className="transition duration-300 text-xl font-semibold mb-3 hover:text-[#f9004d] hover:duration-300">
                Business Development
              </h4>
              <p className="mb-4 text-base">
                I throw myself down among the tall grass by the stream
              </p>
              <div className="design-impo hover-items">
                <p className="font-medium mb-2 text-items cursor-pointer">
                  Read More
                </p>
                <div className="design2 h-0.5 w-10 bg-[#f9004d]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
