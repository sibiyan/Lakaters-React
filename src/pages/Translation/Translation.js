import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Services() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Services;
