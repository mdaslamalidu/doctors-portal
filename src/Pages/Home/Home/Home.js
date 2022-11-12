import React from "react";
import Condition from "../../Conditions/Condition";
import InfoCarts from "../../InfoCarts/InfoCarts";
import MakeApoinment from "../../MakeApoinment/MakeApoinment";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Services></Services>
      <Condition></Condition>
      <MakeApoinment></MakeApoinment>
    </div>
  );
};

export default Home;
