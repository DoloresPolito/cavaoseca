import React from "react";
import styled from "styled-components";
import mixicon from "../assets/icons/mixiconwhite.png";
import officon from "../assets/icons/officonwhite.png";
import { Link } from "react-scroll";
const MoreButton = () => {
  return (
    <>
      <MoreButtonSection>
        <MoreOff>
          <img src={officon} />
          <Link to="off" smooth={true} duration={500}>
            <p>30% off</p>
          </Link>
        </MoreOff>

        <MoreMix>
          <img src={mixicon} />
          <Link to="mix" smooth={true} duration={500}>
            <p>mix</p>
          </Link>
        </MoreMix>
      </MoreButtonSection>
    </>
  );
};

const MoreButtonSection = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    height: 50px;
    width: 50px;
  }

  p {
    font-family: "Bebas Neue", cursive;
    color: white;
    letter-spacing: 1px;
    padding-left: 50px;
    font-size: 30px;
    cursor: pointer;

    @media only screen and (max-width: 500px) {
        padding-left: 20px;
    }
  }
`;

const MoreOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  flex: 1;
  background-color: #6a7059;
  color: white;
  border: 0.5px solid white;

  :hover {
    background-color: #6f5358;
  }
`;
const MoreMix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  flex: 1;
  background-color: #6a7059;
  border: 0.5px solid white;
  color: white;

  :hover {
    background-color: #6f5358;
  }
`;
export default MoreButton;
