import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";
import Hamburger from "hamburger-react";
import { Container } from "../styles";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [location]);
  const [isOpen, setOpen] = useState(false);
  const medium = 850;

  return (
    <NavbarSection location={location.pathname}>
      <NavbarContainer className={!isOpen && "isClosed"}>

      <Link to="/cavaoseca" spy={true} smooth={false} offset={-50} duration={800}>
      <Logo location={location.pathname}>
          {" "}
          <h2>CAVA O SECA</h2>
        </Logo>
        </Link>



        {/* {width >= medium ? ( */}
          {/* <>
            <Tabs mode={"large"} view={props} location={location.pathname} />
          </> */}
        {/* // ) : (
        //   <>
        //     <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
        //     <Menu open={isOpen} location={location.pathname} />
        //   </>
        // )} */}
      </NavbarContainer>
      <div
        style={{ backgrondColor: "violet", height: "30px", width: "30px" }}
      ></div>
    </NavbarSection>
  );
};

const Logo = styled.div`
  position: absolute !important;
  height: 85px;
  top: 2px;
  left: 70px !important;

  h2 {
    font-family: "Bebas Neue", cursive;
    color: #6a6f58;
    font-size: 38px;
    letter-spacing: 1px;
    color: ${(props) => (props.location === "/products" ? "#6a6f58" : "white")};

    @media only screen and (max-width: 635px) {
    top: 2px;
    margin-left: -30px !important;


  }
  }

  @media only screen and (max-width: 635px) {
    top: 2px;
    margin-left: 0px !important;


  }
`;

const NavbarSection = styled.section`
  z-index: 100;
  background: transparent;
  width: 90%;
  border-bottom: ${(props) =>
    props.location === "/products"
      ? "1px solid #6a6f58"
      : "0.5px solid white"};
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-items: end;

  .hamburger-react {
    position: relative;
    right: 40px;
    z-index: 3;
    color: ${(props) => (props.location === "/products" ? "#6a6f58" : "white")};

    @media only screen and (max-width: 700px) {
      right: 30px;
    }
  }
`;

const NavbarContainer = styled(Container)`
  padding: 10px 24px 0 0;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  margin-right: -95px;

`;

export default Navbar;
