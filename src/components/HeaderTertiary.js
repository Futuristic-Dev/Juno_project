import React from "react";

function HeaderTertiary(props) {
  const { heading } = props;
  return (
    <>
      <h2 className="heading-tertiary"
        style={{
          fontSize:'2.95rem',
          fontWeight:'800',
          margin:'0rem',
          lineHeight:'3.5rem',
          // paddingRight:'8rem'
        }}
      >{heading}</h2>
    </>
  );
}

export default HeaderTertiary;
