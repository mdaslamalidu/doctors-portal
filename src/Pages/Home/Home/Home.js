import React from "react";
import InfoCarts from "../../InfoCarts/InfoCarts";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Services></Services>
    </div>
  );
};

export default Home;
