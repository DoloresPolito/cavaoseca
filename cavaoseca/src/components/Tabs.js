import React from "react";
import styled from "styled-components";


const Tabs = ({ mode, location }) => {
  {
    return (
      <TabsBox mode={mode} location={location}>
        {/* <Link
          to="/contact"
          spy={true}
          smooth={false}
          offset={70}
          duration={800}
        >
          QUIENES SOMOS
        </Link> */}

        {/* <a href="https://www.instagram.com/cavaoseca/" target="_blank" rel="noreferrer">
          {location === "/products" ? (
            <>
              {" "}
              <img src={instagramverde} />
            </>
          ) : (
            <>
              {" "}
              <img src={instagram} />
            </>
          )}
        </a>

        <a href="https://www.instagram.com/cavaoseca/" target="_blank" rel="noreferrer">
              <img src={whatsapp} />

        </a> */}
      </TabsBox>
    );
  }
};

// NAVBAR ABIERTA (NO HAMBURGER)

const TabsBox = styled.div`
  margin-top: 5px;
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 0;

  a {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: ${(props) => (props.location === "/products" ? "#6a6f58" : "white")};
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    background: transparent;
    border: 0px solid;
    display: block;
    height: 30px;
    display: flex;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      font-weight: 700;
    }
  }
  img {
    height: 30px;
  }
`;

export default Tabs;
