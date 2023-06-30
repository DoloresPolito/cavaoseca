import React from "react";
import styled from "styled-components";

const CompleteCatalog = () => {
  return (
    <>
      <Top>
        <h2>CATALOGO COMPLETO</h2>
        {/* <img src={mixicon} /> */}

        {/* <h3>Los siguientes productos se venden por caja cerrada</h3> */}

        {/* <h3>
          Recuerda que puedes seleccionar hasta 6 de estos vinos para componer
          una caja que te deleite con una variedad de sabores, aromas y
          experiencias vinícolas. ¡Disfruta de esta oportunidad para explorar y
          degustar los mejores vinos que el mundo tiene para ofrecer!
        </h3> */}
      </Top>
    </>
  );
};

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  flex: 1;
  background-color: #6f5358;
  color: white;
  border: 0.5px solid white;
  opacity: 0.95;

  p {
    font-family: "Bebas Neue", cursive;
    color: white;
    letter-spacing: 1px;

    font-size: 30px;
    cursor: pointer;

    @media only screen and (max-width: 500px) {
      padding-left: 20px;
    }
  }

  img {
    height: 70px;
    width: 70px;
  }

  h2 {
    font-family: "Bebas Neue", cursive;
    color: white;
    letter-spacing: 2px;

    font-size: 30px;
    cursor: pointer;
    max-width: 700px;

    @media only screen and (max-width: 500px) {
      padding-left: 20px;
    }
  }

  h3 {
    font-family: "Poppins";
    color: white;
    letter-spacing: 1px;

    font-size: 15px;
    cursor: pointer;
    max-width: 900px;
    font-weight: 400;
    padding-bottom: 50px;

    @media only screen and (max-width: 500px) {
      padding-left: 20px;
    }
  }
`;

const MoreButtonSection = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    height: 50px;
    width: 50px;
  }

  p {
    font-family: "Bebas Neue", cursive;
    color: white;
    letter-spacing: 1px;
    padding-left: 50px;
    font-size: 30px;
    cursor: pointer;

    @media only screen and (max-width: 500px) {
      padding-left: 20px;
    }
  }
`;

const MoreOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  flex: 1;
  background-color: #6a7059;
  color: white;
  border: 0.5px solid white;
  opacity: 0.95;

  :hover {
    background-color: #6f5358;
  }
`;
const MoreMix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  flex: 1;
  background-color: #6a7059;
  border: 0.5px solid white;
  color: white;
  opacity: 0.95;

  :hover {
    background-color: #6f5358;
  }
`;
export default CompleteCatalog;
