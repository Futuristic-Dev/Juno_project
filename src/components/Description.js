import React from "react";

function Description(prop) {
  const { description } = prop;
//   console.log(description);

  return (
    <>
      <p
      className="services-description"
        style={{
          fontSize: "1.5rem",
          fontWeight: "400",
          padding: "0rem 1rem 0rem 0rem",
          margin: "1rem 1rem 1.5rem 0rem",
          lineHeight: "2.1rem",
        }}
      >
        {description}
      </p>
    </>
  );
}

export default Description;
