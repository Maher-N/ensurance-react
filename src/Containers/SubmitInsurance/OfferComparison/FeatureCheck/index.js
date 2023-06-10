import React from "react";

const FeatureCheck = ({ status }) => {
  return (
    <>
      {status && <img src="checkicon.svg" />}
      {!status && <img src="xicon.svg" />}
    </>
  );
};

export default FeatureCheck;
