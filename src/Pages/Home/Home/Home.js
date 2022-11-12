import React from "react";
import Condition from "../../Conditions/Condition";
import Contact from "../../Contact/Contact";
import InfoCarts from "../../InfoCarts/InfoCarts";
import MakeApoinment from "../../MakeApoinment/MakeApoinment";
import Services from "../../Services/Services";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Services></Services>
      <Condition></Condition>
      <MakeApoinment></MakeApoinment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
