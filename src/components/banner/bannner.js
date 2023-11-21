import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton/primaryButton";
import "./banner.css";

const Banner = (props) => {
  return (
    <div className="container-fluid banner">
      <div className="row">
        <div className="col-md-6 bannerTopic">
          <h1 className="bannerTitle">{props.title}</h1>
          <p>{props.subTitle}</p>
          <div className="getStartedButton">
            <Link to={props.startedTo}>
              <PrimaryButton text={"get started"} />
            </Link>
          </div>
        </div>
        <div className="col-md-6 svgBanner">
          {props.svgBanner}
        </div>
      </div>
    </div>
  );
};

export default Banner;
