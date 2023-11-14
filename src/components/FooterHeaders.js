import React from 'react'

function FooterHeaders(props) {
    const {heading} = props;
  return (
    <>
        <h4 style={{
            fontSize:'1.4rem',
            textTransform:'capitalize',
            padding:'1rem'
        }}>
        {heading}
        </h4>
    </>
  )
}

export default FooterHeaders