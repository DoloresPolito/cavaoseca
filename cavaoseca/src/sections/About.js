import React from "react";
import styled from "styled-components";
import { Section, Title } from "../styles";
import Navbar from "../components/Navbar";

const About = () => {
  return (


    <>
    <div
      className="set_bg"
      style={{
        // backgroundImage: "url('photo3.jpg')",
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar />
      <Section>


      <AboutText>
        <p>
          Por qué no haces lo mismo que ha hecho Fantasy aquí y das tu primer
          paso hacia el mundo de las imágenes animadas! Usar videos y GIFs
          animados como elementos de fondo es una creciente tendencia en el
          mundo del diseño web ya que estos producen un efecto envolvente.
          Por qué no haces lo mismo que ha hecho Fantasy aquí y das tu primer
          paso hacia el mundo de las imágenes animadas! Usar videos y GIFs
          animados como elementos de fondo es una creciente tendencia en el
          mundo del diseño web ya que estos producen un efecto envolvente.
          Por qué no haces lo mismo que ha hecho Fantasy aquí y das tu primer
          paso hacia el mundo de las imágenes animadas! Usar videos y GIFs
          animados como elementos de fondo es una creciente tendencia en el
          mundo del diseño web ya que estos producen un efecto envolvente.
        </p>
      </AboutText>
    </Section>
</div></>
   
  );
};

const AboutText = styled.div`
  width: 800px;
  margin-top:90px;
  margin-left: 70px;
  padding-left: 40px;

  font-size: 15px;
  font-family: "Poppins";
  line-height: 28px;
  font-weight: 400;
  text-align: left;
  color:#ffffff;
`;

export default About;
