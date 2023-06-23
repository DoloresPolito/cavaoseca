import React from "react";
import styled from "styled-components";

import offfondosolo from "../assets/promos/offfondosolo.png";

import vino3 from "../assets/vinos/grilla/Dv Catena Chardonnay.png";
import vino4 from "../assets/vinos/grilla/Rutini Coleccion Malbec.png";
import vino5 from "../assets/vinos/grilla/Saint Felicien Chardonnay.png";

const Off = () => {
  return (
    <>
      <Section>
        <TopLine>
          <p>30% OFF EN VINOS SELECCIONADOS</p>
        </TopLine>

        <div>
          <Box>
            <div>
              <h2>Rutini Coleccion</h2>
              <h3>malbec</h3>
              {/* <button>
                  {" "}
                  <p>$5.600</p>
                </button> */}
            </div>
            <img src={vino4} />
          </Box>

          <Box>
            <div>
              <h2>Saint Felicien </h2>
              <h3>malbec</h3>
              {/* <button>
                  {" "}
                  <p>$5.600</p>
                </button> */}
            </div>
            <img src={vino5} />
          </Box>

          <Box>
            <div>
              <h2>DV Catena </h2>
              <h3>Chardonnay Chardonnay</h3>
              {/* <button>
                  {" "}
                  <p>$5.600</p>
                </button> */}
            </div>
            <img src={vino3} />
          </Box>
        </div>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${offfondosolo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */

  div {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
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
    padding-top: 17px;
  }
`;

const Box = styled.div`
  /* background-color: blue !important; */
  display: flex;
  flex-direction: column !important;
  padding-top: 60px;

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

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

    button {
      background-color: #6a7059;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-top: 30px;

      p {
        margin-top: 6px;
      }
    }
  }
`;

export default Off;
