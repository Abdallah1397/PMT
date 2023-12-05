import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/banner/bannner";
import HomeSVG from "../../assets/svgs/homeSVG/homeSVG";
import Hero from "../../components/hero/hero";
import AllBenefits from "../../components/allBenefits/allBenefits";
import AllQuotes from "../../components/allQuotes/allQuotes";
import Clients from "../../components/clients/clients";
import "./home.css";

// Home Page 
const Home = () => {
  // Authenticated status
  const { isAuth } = useSelector((state) => state.user);
  return (
    <div className="container-fluid">
      {/* Home Banner */}
      <Banner
        title={"Start The Profiles Management In Several Ways"}
        subTitle={
          "Before you start the Profile Management Tool, you need to be aware of the restrictions and ensure that the prerequisites are met."
        }
        startedTo={isAuth ? "/profiles" : "/signin"}
        svgBanner={<HomeSVG />}
      />
      {/* Benfefits Section */}
      <div className="row homeSectionStyle">
        <AllBenefits />
      </div>
      {/* Hero */}
      <div className="row">
        <Hero
          title="Explore the leading user profile management tools in-depth"
          to="/profiles"
          buttonText="Discover Now"
        />
      </div>
      {/* Pepole Saying */}
      <div className="row" style={{ padding: "2rem 2rem 4rem 2rem" }}>
        <AllQuotes />
      </div>
      {/* Clients Slider */}
      <div className="row homeSectionStyle">
        <Clients />
      </div>
    </div>
  );
};

export default Home;
