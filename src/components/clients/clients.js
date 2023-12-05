import React, { Fragment } from "react";
import ClientSlider from "../clientSlider/clientSlider";
import Title from "../title/title";

const Clients = () => {
  return (
    <Fragment>
      <Title title="Our Clients" />
      <ClientSlider />
    </Fragment>
  );
};

export default Clients;
