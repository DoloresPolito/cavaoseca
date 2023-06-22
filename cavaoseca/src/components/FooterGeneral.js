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
    console.log("VIEW EN GENERAL FOOTER", view)
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
    return(<> {width > 800 ? (
        <>
          <FooterContainer mode={width} ref={ref} view={view}>
            <motion.div>
              {" "}
              {/* <Logo src={logo} /> */}
            </motion.div>

            <Column1 animate={animation} view={view}>
              <FooterTitle view={view}>Contactanos</FooterTitle>
              <div>
                <a href="mailto:dolores.polito@gmail.com">
                  {" "}
                  {/* <img src={mail} alt="mail" /> */}
                </a>
                <a
                  href="https://www.instagram.com/cavaoseca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://wa.me/5493446584076"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </div>
            </Column1>

            <Column2 animate={animation} view={view}>
              {" "}
              <ul className="list">
                {/* <li>{t("footer.services")}</li> {/* <RouterLink to="/work"> } */}
                <RouterLink to="/products">
                  {" "}
                  <li> PRODUCTOS</li>
                </RouterLink>
                <RouterLink to="/about">
                  {" "}
                  <li>SOBRE NOSOTROS</li>{" "}
                </RouterLink>
                <RouterLink to="/contact">
                  {" "}
                  <li>CONTACTO</li>{" "}
                </RouterLink>
              </ul>
            </Column2>

            <CopyRight animate={animation} view={view}>
              <p> Todos los derechos reservados</p>
            </CopyRight>
          </FooterContainer>
        </>
      ) : (
        <MobileSection>
          <MobileContainer>
            <Div>
              <div>
                <FooterTitle>CONTACTANOS</FooterTitle>
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
                {/* <RouterLink to="/services">
                  {" "}
                  <li> {t("footer.services")}</li>{" "}
                </RouterLink> */}
                <RouterLink to="/products">
                  {" "}
                  <li> PRODUCTOS</li>{" "}
                </RouterLink>
                <RouterLink to="/about">
                  {" "}
                  <li>SOBRE NOSOTROS</li>{" "}
                </RouterLink>
                <RouterLink to="/contact">
                  {" "}
                  <li>CONTACTO</li>{" "}
                </RouterLink>
              </ul>
            </Div>
            <div> {/* <Logo2 src={logo} /> */}</div>

            <CopyRight2>
              <p> Todos los derechos reservados</p>
            </CopyRight2>
          </MobileContainer>
        </MobileSection>
      )}</>)
}


const FooterContainer = styled(motion.div)`
  display: flex;
  height: 200px;
  width: 85%;
  /* border-top: 1px solid white; */
  margin: auto;
  position: relative;
  /* border-top: ${(props) => (props.view === "products" ? "1px solid #6a6f58" : "1px solid white")}; */
`;

const Logo = styled.img`
  position: relative;
  left: 90px;
  width: 230px;
  top: 10px;

  @media only screen and (max-width: 1150px) {
    width: 300px;
    top: 30px;
  }
`;

const Logo2 = styled.img`
  width: 240px;
`;

const Column1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 310px;
  top: 50px;


  div {
    margin-left: -17px;
    margin-top: -20px;
    display: flex;
    flex-direction: row;

    a {
      padding-left: 20px;
    }
  }

  img {
    height: 20px;
    width: 20px;
    margin-top: 10px;
  }

  @media only screen and (max-width: 1150px) {
    right: 160px;
    ul {
      font-size: 13px;
    }
  }
`;

const Column2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-right: 10px;
  position: absolute;
  right: 120px;

  ul {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
  }

  li {
    /* text-decoration: underline #6F5358; */

    text-decoration: ${(props) => (props.view === "products" ? "underline #6F5358" : "underline white")};
    /* color: #fefefe; */

      color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")};
    font-weight: 400;
  }

  @media only screen and (max-width: 1150px) {
    right: 30px;
    ul {
      font-size: 13px;
    }
  }
`;

const FooterTitle = styled.h4`
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  line-height: 22px;
  /* color: #fefefe; */
  color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")};
  font-weight: 600;
  letter-spacing: 2px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

const CopyRight = styled(motion.div)`
  position: absolute; 
   bottom: -60px;
  left: 500px;


  p {
    font-size: 13px;
    font-family: "Poppins";
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    /* color:#fefefe; */
    color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")};
  }

  @media only screen and (max-width: 1150px) {
    left: 30px;
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
  }

  li {
    text-decoration: underline #6F5358;
    /* color: #fefefe; */
    color: ${(props) => (props.view === "home" ? "#fefefe" : "#6a6f58")};
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