import React, { useEffect } from "react";
import SmallMap from "../components/SmallMap";
import styled from "styled-components";
import SimpleSlider from "../components/SimpleSlider";

const MainPage = ({ copied }) => {
  const xy = [126.238441001881, 33.2976609987304];
  useEffect(() => {
    // console.log(copied);
  }, []);
  return (
    <div>
      <SimpleSlider copied={copied} />
      {/* <SmallMap xy={xy} /> */}
    </div>
  );
};

export default MainPage;
