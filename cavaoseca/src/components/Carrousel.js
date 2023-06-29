import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";

import promomixdesktop from "../assets/promos/mixdif.png";
import promomixtablet from "../assets/promos/mix/mixtablet.png";
import promomixmobile from "../assets/promos/mix/promomixmobilenew.png";

import promooffmobile from "../assets/promos/off/offmobile.png";

import off30 from "../assets/promos/20nuevo.png";
import off30mobile from "../assets/promos/30mobile.png";

import { Link as SmoothLink } from "react-scroll";

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const [showButton, setButton] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 850;
  const small = 500;

  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <div className="slick-prev"></div>,
    nextArrow: <div className="slick-next"></div>,
  };

  return (
    <CarrouselContainer>
      {showNavBar && (
        <nav className="navbar">
          <Navbar />
        </nav>
      )}

      {width >= medium ? (
        <>
          <Slider {...settings} afterChange={setCurrentIndex}>
            <SlideContainer>
              <img
                style={{
                  backgroundImage: `url(${promomixdesktop})`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></img>

              {showButton && (
                <button className="bigbutton">
                  {/* <SmoothLink
                    to="off"
                    spy={true}
                    smooth={false}
                    offset={70}
                    duration={400}
                  > */}
                    <BigButtonMix>ver más mix</BigButtonMix>
                  {/* </SmoothLink> */}
                </button>
              )}
            </SlideContainer>
            <SlideContainer>
              <img
                style={{
                  backgroundImage: `url(${off30})`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {showButton && (
                <button className="bigbutton">
                  <BigButtonOff>
                    <p>ver más </p>
                  </BigButtonOff>
                </button>
              )}
            </SlideContainer>
          </Slider>
        </>
      ) : (
        <>
          {width >= small ? (
            <>
              <Slider {...settings} afterChange={setCurrentIndex}>
                <SlideContainer>
                  <img
                    style={{
                      backgroundImage: `url(${promomixtablet})`,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SlideContainer>
                <SlideContainer>
                  <img
                    style={{
                      backgroundImage: `url(${promomixtablet})`,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SlideContainer>
              </Slider>
            </>
          ) : (
            <>
              <Slider {...settings} afterChange={setCurrentIndex}>
                <SlideContainer>
                  <img
                    style={{
                      backgroundImage: `url(${promomixmobile})`,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SlideContainer>
                <SlideContainer>
                  <img
                    style={{
                      backgroundImage: `url(${promooffmobile})`,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SlideContainer>
              </Slider>
            </>
          )}
        </>
      )}
    </CarrouselContainer>
  );
}

const CarrouselContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  z-index: 10;
`;

const SlideContainer = styled.div`
  height: 100vh;
  z-index: 10;
`;

const BigButtonOff = styled.button`
  height: 50px;
  width: 120px;
  background-color: transparent;
  z-index: 100;
  position: absolute;
  top: 620px;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  margin-left: -50px;

  p {
    color: white !important;
    font-size: 15px !important;
    font-family: "Poppins";
    font-weight: 400 !important;
    letter-spacing: 1.5px;
    line-height: 1 !important;
    margin: 5px;
  }
`;

const BigButtonMix = styled.div`
  height: 30px;
  width: 100px;
  background-color: blue;
  z-index: 100;
  position: absolute;
`;

// const SlideImage = styled.div`
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
// `;

export default Carrousel;
