import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo_blanco_horiz.png";
import Menu from "../components/Menu";
import Tabs from "../components/Tabs";
import Hamburger from "hamburger-react";
import { Container } from "../styles";
import { useLocation } from "react-router-dom";

const Navbar = ({ props }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [location]);
  const [isOpen, setOpen] = useState(false);
  const medium = 700;

  return (
    <NavbarSection location={location.pathname}>
      <NavbarContainer className={!isOpen && "isClosed"}>
        <Logo src={logo} />
        {width >= medium ? (
          <>
            <Tabs mode={"large"} view={props} location={location.pathname} />
          </>
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
            <Menu open={isOpen} location={location.pathname}/>
          </>
        )}
      </NavbarContainer>
    </NavbarSection>
  );
};

const Logo = styled.img`
  height: 40px;
  width: 200px;
  @media only screen and (max-width: 700px) {
    height: 37px;
  }
`;

const NavbarSection = styled.section`
  z-index: 100;
  background: transparent;
  width: 80%;
  border-bottom: ${(props) => (props.location === "/products" ? "1.5px solid #6a6f58" : "1.5px solid white")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media only screen and (max-width: 700px) {
  }
  .hamburger-react {
    position: relative;
    z-index: 3;
    color: white;
  }
`;

const NavbarContainer = styled(Container)`
  padding: 10px 24px 0 0;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
`;

export default Navbar;
