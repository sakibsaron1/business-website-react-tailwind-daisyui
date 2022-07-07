import React from "react";
import image from "../../images/about-3.jpg";

const About = () => {
  return (
    <div className="about-area mx-10 my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 sm:grid-cols-3 sm:gap-6">
        <div className="about-image justify-items-end">
          <img src={image} alt="" className="rounded-lg" />
        </div>
        <div className="about-details text-left col-span-2 mt-16">
          <h2 className="text-6xl font-bold mb-4 decoration-black ml-4">
            About
          </h2>
          <p className="mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered. alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 sm:mt-12 md:grid-cols-2 md:mt-12">
            <div className="about-items mb-4">
              <h2 className="text-3xl font-medium mb-4 decoration-black ml-4">
                Who we are
              </h2>
              <p className="mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
            <div className="about-items">
              <h2 className="text-3xl font-medium mb-4 decoration-black ml-4">
                Who we are
              </h2>
              <p className="mx-4 text-sm md:text-xl sm:text-xl text-[#717173]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
