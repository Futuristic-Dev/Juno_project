import React from "react";
import ButtonMain from "../components/ButtonMain";
import HeaderSecondary from "../components/HeaderSecondary";
function Banner() {
  return (
    <div className="banner">
      <div className="banner-con">
        <HeaderSecondary heading="innovation comes to life"></HeaderSecondary>
        <h1 className="banner-con--header-main">
          building a generation of skilled engineers
        </h1>
        <p
          className="banner-con--paragraph"
        >
          In the ever-evolving tech landscape, innovation is the force driving us to new frontiers. Today's engineers aren't just problem solvers; they're visionaries, architects of change, and pioneers of progress.
        </p>
        <ButtonMain></ButtonMain>
      </div>
    </div>
  );
}

export default Banner;
