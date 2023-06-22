import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import textura from "../assets/promos/texturapromos.png"
// import img from "../assets/promos/IMG.png"

const Promos = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 850;
  const small = 500;

  return (
    <>
      <PromosSection>
        {width >= medium ? (
          <>
            <DivContainer1 />
          </>
        ) : (
          <>
            <DivContainer2 />
          </>
        )}
      </PromosSection>
    </>
  );
};

const PromosSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const DivContainer1 = styled.div`
  width: 100%;
  background-image: url("./mixdet/mixdetdesktop.png");
  background-size: cover;
  background-position: center;
  display: flex;
  /* align-items: center;
  justify-content: center; */
`;

const DivContainer2 = styled.div`
  width: 100%;
  background-image: url("./mixdet/mixdetmobile.png");
  background-size: cover;
  background-position: center;
  display: flex;
  /* align-items: center;
  justify-content: center; */
`;

export default Promos;
