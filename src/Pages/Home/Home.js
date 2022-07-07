import React from "react";
import Slider from "../../components/Slider";
import About from "../About/About";
import Clients from "../Clients/Clients";
import Pricing from "../Pricing/Pricing";
import Review2 from "../Review2.js/Review2";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Clients></Clients>
      <Team></Team>
      <Review2></Review2>
      <About></About>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
