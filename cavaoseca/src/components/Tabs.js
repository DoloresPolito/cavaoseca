import React from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

const Tabs = ({ mode }) => {
  const path = window.location.pathname;

  {
    return (
      <TabsBox mode={mode}>
        <Link to="/" spy={true} smooth={false} offset={-50} duration={800}>
          HOME
        </Link>
        <Link to="/about" spy={true} smooth={false} offset={-13} duration={800}>
          QUIENES SOMOS
        </Link>
        <Link to="/products" spy={true} smooth={false} offset={70} duration={800}>
          PRODUCTOS
        </Link>
        <Link to="/contact" spy={true} smooth={false} offset={70} duration={800}>
          CONTACTO
        </Link>
  
      </TabsBox>
    );
  }
};


// NAVBAR ABIERTA (NO HAMBURGER)

const TabsBox = styled.div`
/* background-color: red; */
margin-left: 200px;
margin-top: 5px;
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  /* text-align: center;
  justify-content: center; */
  z-index: 0;


  a {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: #fefefe;
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
      text-decoration: underline;
      color: #fefefe !important;
    }
  }
`;

// const Social = styled.div`
//   display: flex;
// `
// const TabsBox = styled.div`
//   display: ${props => (props.mode == 'large' ? 'flex' : 'block')};
//   align-items: center;
//   text-align: center;
//   a {
//     padding: ${props => (props.mode == 'large' ? '0 20px' : '20px 0')};
//     display: flex;
//     align-items: center;
//     img {
//       width: 35px;
//       padding: 0 5px;
//     }
//   }
// `

export default Tabs;
