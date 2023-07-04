import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import offfondosolo from "../assets/promos/offfondosolo.png";
import vino3 from "../assets/vinos/grilla/Dv Catena Chardonnay.png";
import vino4 from "../assets/vinos/grilla/Rutini Coleccion Malbec.png";
import vino5 from "../assets/vinos/grilla/Saint Felicien Chardonnay.png";
import vino6 from "../assets/vinos/grilla/Dv Catena Malbec.png";
import { Link } from "react-scroll";
import Carousel from "react-elastic-carousel";

const Off = () => {

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const medium = 800
  const small = 530
  const small2 = 420

  return (
    <>


      <BenefitsContainer>
        <Carousel itemsToShow={width > medium ? 4 : width > small ? 3 : width > small2 ? 2 : 1} enableTilt={true} pagination={false}>
          <Item>
            <Box>
              <OffDetail><p>30% <br/>OFF</p></OffDetail>
              <div>
                <h2>Rutini Coleccion</h2>
                <h3>malbec</h3>
                <img src={vino4} />

                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>25% <br/>OFF</p></OffDetail>
              <div>
                <h2>Saint Felicien </h2>
                <h3>malbec</h3>
                <img src={vino5} />
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </div>
            </Box>{" "}
          </Item>
          <Item>
            <Box>
            <OffDetail><p>20% <br/>OFF</p></OffDetail>
              <div>
                <h2>DV Catena </h2>
                <h3>Malbec</h3>
                <img src={vino6} />
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>15% <br/>OFF</p></OffDetail>
              <div>
                <h2>DV Catena </h2>
                <h3>Chardonnay </h3>
                <img src={vino3} />
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>20% <br/>OFF</p></OffDetail>
              <div>
                <h2>DV Catena </h2>
                <h3>Chardonnay </h3>
                <img src={vino3} />
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>30% <br/>OFF</p></OffDetail>
              <div>
                <h2>DV Catena </h2>
                <h3>Chardonnay </h3>
                <img src={vino3} />
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </div>
            </Box>
          </Item>
        </Carousel>

        <Link to="products" smooth={true} duration={1000}>
          <button className="vertodo">ver todos los productos</button>
        </Link>
      </BenefitsContainer>
    </>
  );
};

// const Section = styled.div`
//   width: 100%;
//   height: 100%;
//   background-image: url(${offfondosolo});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;

//   div {
//     display: flex;
//     flex-direction: row;
//     margin: 0 auto;
//     flex-wrap: wrap;
//     /* padding-bottom: 140px; */
//   }

//   @media only screen and (max-width: 1230px) {
//     height: 100%;
//   }

//   .vertodo {
//     border: 1px solid #6a7059;
//     height: 40px;
//     background: transparent;
//     cursor: pointer;
//     color: #6a7059;
//     padding: 10px 20px;
//     margin-top: 40px;
//     margin-bottom: 40px;
//   }
// `;

// const TopLine = styled.div`
//   height: 70px;
//   width: 100%;
//   background-color: #9fb097;
//   position: relative;

//   p {
//     color: white;
//     font-family: "Cormorant", serif;
//     font-size: 28px;
//     letter-spacing: 1.2px;
//     margin: auto;
//     padding-top: 6px;
//   }

//   @media only screen and (max-width: 519px) {
//     height: 100px;
//   }
// `;

const Box = styled.div`
  display: flex;
  flex-direction: column !important;
  padding-top: 60px;
  z-index: 100;

  img {
    height: 360px;
    /* padding-top: 20px; */
  }

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .prev {
      background-color: #6f5358;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
        text-decoration: line-through;
      }

      .prevprice {
        margin-top: 6px;
        text-decoration: line-through;
        color: #6f5358;
      }
    }

    .prevprice {
      margin-top: 6px;
      text-decoration: line-through;
      color: #6f5358;
      font-weight: 600;
    }

    .nowprice {
      margin-top: 6px;
      color: white;
      font-weight: 700;
    }
    .now {
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

const Item = styled.div`
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* gap: 25px; */
  flex-wrap: wrap;


  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    /* height: 400px; */
    align-items: left;
    justify-content: center;
    align-items: flex-start !important;
    /* padding: 50px; */
    /* margin-left: 5px; */
  }
  
  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .prev {
      background-color: #6f5358;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
        text-decoration: line-through;
      }

      .prevprice {
        margin-top: 6px;
        text-decoration: line-through;
        color: #6f5358;
      }
    }

    .prevprice {
      margin-top: 6px;
      text-decoration: line-through;
      color: #6f5358;
      font-weight: 600;
    }

    .nowprice {
      margin-top: 6px;
      color: white;
      font-weight: 700;
    }
    .now {
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
      font-family: "Bebas Neue", cursive;
      text-transform: uppercase;
      color: #6a7059;
      letter-spacing: 2px;
      height: 10px;
    }

    h3 {
      font-size: 14px;
      font-weight: 600;
      font-family: "Roboto";
      text-transform: uppercase;
      color: #6a7059;

    }
  }
`;

const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 0;
  box-sizing: border-box;
  height: auto;
  text-align: left;
  width: 100%;
  height: 100%;
  background-image: url(${offfondosolo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }

  .rec-carousel {
    width: calc(100% + 90px);
    min-height: 300px;
    width: 90vw;
    /* border: 1px solid black; */
    @media only screen and (max-width: 850px) {
      width: 90vw;
    }
  }
  .rec-slider-container {
    margin: 0;
  }
  .rec-arrow {
    background-color: transparent;
    color: grey;
    box-shadow: none;
  }
  .rec-arrow:hover,
  .rec-arrow:active,
  .rec-arrow:focus {
    background-color: transparent;
    color: black;
    box-shadow: none;
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

const OffDetail = styled.div`
position:relative;
bottom:-170px;
left:-70px;
height: 50px;
width: 50px;
background-color: #6A6F58;
border-radius: 30px;

p{
  font-family: "Bebas Neue", cursive;
  color:white;
  letter-spacing: 1px;
  text-align:center;
}

`

export default Off;
