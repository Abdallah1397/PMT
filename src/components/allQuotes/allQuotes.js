import React, { Fragment } from "react";
import Title from "../title/title";
import QuoteCard from "../quoteCard/quoteCard";
import { quotesArr } from "./quotes";

const AllQuotes = () => {
  return (
    <Fragment>
      {/* All Quotes Title */}
      <Title title="WHAT GENTS LIKE YOU ARE SAYING" />
      {/* All Quotes */}
      {quotesArr.map((item, i) => (
        <div className="col-12 col-md-3 mt-3 mt-md-1" key={i}>
          <QuoteCard
            message={`“${item.msg}”`}
            sender={item.sender}
            imgSrc={item.imgSrc}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default AllQuotes;
