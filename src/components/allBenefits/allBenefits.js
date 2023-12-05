import React, { Fragment } from "react";
import Title from "../title/title";
import BenefitCard from "../benefitCard/benefitCard";
import { benefits } from "./benefits";

const AllBenefits = () => {
  return (
    <Fragment>
      {/* Benefit Title */}
      <Title title="Meet the Benefits Section" />
      {/* All Benefits */}
      {benefits.map((item, i) => (
        <div className="col-12 col-md-4 mt-4 mt-md-1" key={i}>
          <BenefitCard
            title={item.title}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            subTitle={item.subTitle}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default AllBenefits;
