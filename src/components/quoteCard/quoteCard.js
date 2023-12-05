import React from "react";
import "./quoteCard.css";

const QuoteCard = (props) => {
  return (
    <div className="sayingCard">
      <p>{props.message}</p>
      <img src={props.imgSrc} alt="User Photo"/>
      <h6>{props.sender}</h6>
    </div>
  );
};

export default QuoteCard;
