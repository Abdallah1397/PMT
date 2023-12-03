import React from "react";
import "./benefitCard.css";

const BenefitCard = (props) => {
  return (
    <div className="benefitCard">
      <img alt={props.imgAlt} src={props.imgSrc} width="90"/>
      <h3 className="benefitCardTitle">{props.title}</h3>
      <p className="benefitCardSubTitle">{props.subTitle}</p>
    </div>
  );
};

export default BenefitCard;
