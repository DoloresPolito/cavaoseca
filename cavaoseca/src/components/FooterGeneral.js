import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import instagram from "../assets/contact/instagram-white.png";
import whatsapp from "../assets/contact/whatsapp-white.png";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logobebasnegro.png";

const FooterGeneral = ({view}) => {

    const animation = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });
  
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
  
    useEffect(() => {
      if (inView) {
        animation.start({
          opacity: 1,
          transition: {
            duration: 0.75,
            ease: "easeIn",
          },
        });
      }
  
      if (!inView) {
        animation.start({
          opacity: 0,
        });
      }
    }, [inView]);


    return(<> 
        <MobileSection>
          <MobileContainer>
            <Div view={view}>
              <div>
                <FooterTitle view={view}>CONTACTANOS</FooterTitle>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a href="mailto:oliviapollitzer@gmail.com">
                    {" "}
                    {/* <img src={mail} alt="mail" /> */}
                  </a>
                  <a
                    href="https://www.instagram.com/olipollitzer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img src={whatsapp} alt="linkedin" />
                  </a>
                </div>
              </div>

              <ul className="list">
         
                <RouterLink to="/products">
                  {" "}
                  <li> PRODUCTOS</li>{" "}
                </RouterLink>
       
                <RouterLink to="/contact">
                  {" "}
                  <li>CONTACTO</li>{" "}
                </RouterLink>
                <RouterLink to="/cavaoseca">
                  {" "}
                  <li>HOME</li>{" "}
                </RouterLink>
              </ul>
            </Div>
         

            <CopyRight2 view={view}>
              <p> Todos los derechos reservados</p>
            </CopyRight2>
          </MobileContainer>
        </MobileSection>
    </>)
}




const FooterTitle = styled.h4`
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")} !important;
  font-weight: 600;
  letter-spacing: 2px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;



const CopyRight2 = styled.div`
  display: flex;

  p {
    font-size: 12px;
    font-family: "Poppins";
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")} !important;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 40px;


  ul {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
    margin-right: 40px;
    color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")} !important;
    text-decoration: ${(props) => (props.view === "home" ? "underline #6f5358" : "underline #eae9e5")} !important;
  }

  li {

    text-decoration: ${(props) => (props.view === "home" ? "underline #6f5358" : "underline #eae9e5")} !important;
    color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")} !important;
    font-weight: 400;


  }

  img {
    height: 20px;
    width: 20px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const MobileSection = styled.div`
  display: flex;
  justify-content: center !important;
  margin: 0 auto;
`;
export default FooterGeneral;