import React from "react";
import styled from "styled-components";
import "../App.css";
import backgroundImage from "../assets/fondos/fondo_producto.png";
import FooterGeneral from "../components/FooterGeneral";

const ProductsFooter = () => {
  return (
    <FooterSection>
      <FooterGeneral view="products"/>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  height: 200px;
  /* background-color: #dad6cc; */
  background-color: transparent;
  background-image: 'url(${backgroundImage}';
  color: #252525 !important;
  display: flex;
  width: 100%;
  margin: auto;
  height: ${(props) => (props.mode > 800 ? "350px" : "400px")};
  height: 350px;

`;

export default ProductsFooter;
