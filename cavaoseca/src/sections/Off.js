import React from "react";
import styled from "styled-components";

import offfondosolo from "../assets/promos/offfondosolo.png";

import vino3 from "../assets/vinos/grilla/Dv Catena Chardonnay.png";
import vino4 from "../assets/vinos/grilla/Rutini Coleccion Malbec.png";
import vino5 from "../assets/vinos/grilla/Saint Felicien Chardonnay.png";

import { Link  } from "react-scroll";
import { useNavigate } from "react-router-dom";


const Off = () => {
const navigate = useNavigate()
  const handleNavigate = () => {

    navigate("/products")

  }
  return (
    <>
      <Section >
        {/* <TopLine id="off">
          <p>30% OFF EN VINOS SELECCIONADOS</p>
        </TopLine> */}

        <div id="off">
          <Box>
            <div>
              <h2>Rutini Coleccion</h2>
              <h3>malbec</h3>
              <img src={vino4} />
              <button>
                {" "}
                <p>$5.600</p>
              </button>
            </div>
          </Box>

          <Box>
            <div>
              <h2>Saint Felicien </h2>
              <h3>malbec</h3>
              <img src={vino5} />
              <button>
                {" "}
                <p>$5.600</p>
              </button>
            </div>
          </Box>

          <Box>
            <div>
              <h2>DV Catena </h2>
              <h3>Chardonnay Chardonnay</h3>
              <img src={vino3} />
              <button>
                {" "}
                <p>$5.600</p>
              </button>
            </div>
          </Box>
          <Box>
            <div>
              <h2>DV Catena </h2>
              <h3>Chardonnay Chardonnay</h3>
              <img src={vino3} />
              <button>
                {" "}
                <p>$5.600</p>
              </button>
            </div>
          </Box>
        </div>

        <button className="vertodo" onClick={() => handleNavigate()}>ver todos los productos</button>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${offfondosolo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    flex-wrap: wrap;
    /* padding-bottom: 140px; */
  }

  @media only screen and (max-width: 1230px) {
    height: 100%;
  }

  .vertodo {
    border: 1px solid #6a7059;
    height: 40px;
    background: transparent;
    cursor: pointer;
    color: #6a7059;
    padding: 10px 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const TopLine = styled.div`
  height: 70px;
  width: 100%;
  background-color: #9fb097;
  position: relative;

  p {
    color: white;
    font-family: "Cormorant", serif;
    font-size: 28px;
    letter-spacing: 1.2px;
    margin: auto;
    padding-top: 6px;
  }

  @media only screen and (max-width: 519px) {
    height: 100px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column !important;
  padding-top: 60px;
  z-index: 100;

  img {
    height: 360px;
    padding-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    button {
      background-color: #6a7059;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: "Cinzel", sans-serif;
      text-transform: uppercase;
      color: #252525;
      font-family: "Cormorant", serif;
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      font-family: "Roboto";
      text-transform: uppercase;
      color: #6a7059;
    }
  }
`;

export default Off;
