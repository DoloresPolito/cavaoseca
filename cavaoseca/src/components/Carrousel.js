import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";


import promomixdesktop from "../assets/promos/mixnuevo.png";
import promomixtablet from "../assets/promos/mix/mixtablet.png";
import promomixmobile from "../assets/promos/mix/mixmobile.png";

import promooffmobile from "../assets/promos/off/offmobile.png"

import off30 from "../assets/promos/20nuevo.png";
import off30mobile from "../assets/promos/30mobile.png";

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);

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
  

      {width >= medium ? (<>
        <Slider {...settings} afterChange={setCurrentIndex}>
        <SlideContainer>
  
          <img  
            style={{backgroundImage: `url(${promomixdesktop})`, height:"100%", width:"100%", backgroundSize:"cover", backgroundPosition:"center"}}
          />
      </SlideContainer>
        <SlideContainer>
          <img  
          style={{backgroundImage: `url(${off30})`, height:"100%", width:"100%", backgroundSize:"cover", backgroundPosition:"center"}}
          />
      </SlideContainer>
      </Slider>
      </>) : (
      <>
      {width >= small ? (<>
      
      
        <Slider {...settings} afterChange={setCurrentIndex}>
        <SlideContainer>
  
          <img  
            style={{backgroundImage: `url(${promomixtablet})`, height:"100%", width:"100%", backgroundSize:"cover", backgroundPosition:"center"}}
          />
      </SlideContainer>
        <SlideContainer>
          <img  
          style={{backgroundImage: `url(${promooffmobile})`, height:"100%", width:"100%", backgroundSize:"cover", backgroundPosition:"center"}}
          />
      </SlideContainer>
      </Slider>
      
      </>) : (<>


     
      
        <Slider {...settings} afterChange={setCurrentIndex}>
        <SlideContainer>
  
          <img  
            style={{backgroundImage: `url(${promomixmobile})`, height:"100%", width:"100%", backgroundSize:"cover", backgroundPosition:"center"}}
          />
      </SlideContainer>
        <SlideContainer>
          <img  
          style={{backgroundImage: `url(${promooffmobile})`, height:"100%", width:"100%", backgroundSize:"cover", backgroundPosition:"center"}}
          />
      </SlideContainer>
      </Slider>
      
      
        </>)}
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
  overflow: hidden;
`;

const SlideContainer = styled.div`
  height: 100vh;
`;




// const SlideImage = styled.div`
//   height: 100%;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
// `;

export default Carrousel;