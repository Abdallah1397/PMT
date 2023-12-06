import React from "react";
import Title from "../title/title";
import "./paragraphSection.css";

const ParagraphSection = (props) => {
  return (
    <div className="paragraphSection">
      <Title title={props.title} />
      <p>{props.text}</p>
    </div>
  );
};

export default ParagraphSection;
