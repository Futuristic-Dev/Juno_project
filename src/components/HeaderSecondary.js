import React from "react";

const HeaderSecondary = (props) => {
  const { heading } = props;
  // console.log(heading);
  return (
    <>
      <h3 className="banner-con--heading-secondary">
        {heading}
      </h3>
    </>
  );
};

export default HeaderSecondary;
