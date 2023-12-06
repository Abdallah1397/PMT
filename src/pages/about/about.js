import React from "react";
import Banner from "../../components/banner/bannner";
import AboutSVG from "../../assets/svgs/aboutSVG/aboutSVG";
import AllBenefits from "../../components/allBenefits/allBenefits";
import Clients from "../../components/clients/clients";
import AllQuotes from "../../components/allQuotes/allQuotes";
import Hero from "../../components/hero/hero";
import ParagraphSection from "../../components/paragraphSection/paragraphSection";
const About = () => {
  return (
    <div className="container-fluid">
      {/* About */}
      <Banner title={"NICE TO MEET YOU"} svgBanner={<AboutSVG />} />
      {/* All Benefits */}
      <div className="row homeSectionStyle">
        <ParagraphSection
          title="who we are"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
      {/* Hero */}
      <div className="row">
        <Hero title="Explore the leading user profile management tools in-depth" />
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

export default About;
