import '../App.css'
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
// import image1 from "../assets/carrousel/ffoto_1.png"
import image2 from "../assets/carrousel/foto_2.png"
import image3 from "../assets/carrousel/fotos_3.png"

function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showNavBar, setShowNavBar] = useState(true);
  
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
      autoplaySpeed: 3000,
      arrows: true,
      prevArrow: <div className="slick-prev"></div>,
      nextArrow: <div className="slick-next"></div>,
    };
  
    return (
      <div className="carrousel">
        {showNavBar && (
          <nav className="navbar">
   
            <Navbar/>
          </nav>
        )}
        <Slider {...settings} afterChange={setCurrentIndex}>
          {/* <div>
            <img src={image1} alt="Imagen 1" />
          </div> */}
          <div>
            <img src={image2} alt="Imagen 2" />
          </div>
          <div>
            <img src={image3} alt="Imagen 3" />
          </div>
        </Slider>
    
      </div>
    );
  }
  
  export default Carrousel;