import React from "react";
import styled from "styled-components";
import mancha1 from "../assets/Mancha 3.png";
import mancha2 from "../assets/Manch 4.png";

const Mix = () => {
  return (
    <>
      <MixSection>
        <Top>
          <Img1 src={mancha1} />
          <h2>Elegí 6 vinos de nuestro catalogo y arma una caja a tu gusto!</h2>
          <Img2 src={mancha2} />
        </Top>
        <Bottom>
          <div>
            <Box>
              <img src={`/vinos/grilla/Bressia Lagrima Canela.png`} />
              <div>
              <h2>Bressia Lagrima Canela</h2>
              <p>$5.600</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Gran Enemigo Gualtallary.png`} />
              <div>
              <h2>Gualtallary</h2>
              <p>$3.000</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Dv Catena Chardonnay.png`} />
              <div>
              <h2>DV Catena Chardonnay</h2>
              <p>$3.000</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Rutini Coleccion Malbec.png`} />
              <div>
              <h2>Rutini Coleccion Malbec</h2>
              <p>$3.000</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Saint Felicien Chardonnay.png`} />
              <div>
              <h2>Saint Felicien Malbec</h2>
              <p>$3.000</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Felino.png`} />
              <div>
              <h2>Felino</h2>
              <p>$3.000</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Cocodrilo.png`} />
              <div>
              <h2>Cocodrilo</h2>
              <p>$3.000</p>
              </div>
            </Box>

            <Box>
              <img src={`/vinos/grilla/Dv Catena Malbec Malbec.png`} />
              <div>
              <h2>DV Catena </h2>
              <p>$3.000</p>
              </div>
            </Box>


          </div>
        </Bottom>
      </MixSection>
    </>
  );
};

const MixSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6f5358;
  background-image: url(data:image/png;base64,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);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  flex: 50%;
  justify-content: center;
  align-items: center;
  height: 50%;

  h2 {
    font-family: "Poppins";
    font-weight: 500;
    color: white;
    max-width: 500px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  flex: 50%;
  background-color: white;
  background-image: url("./fondomix.png");
  z-index: 100;
  padding: 10px;
  div {
    /* background-color: white;
    opacity: 0.8; */
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }
  img {

    margin: 0px;
    height: 250px;
    width: 180px;
    margin-left: -40px;
    margin-top: -5px;

  }
`;

const Img1 = styled.img`
  position: relative;
  top: 28px;
  left: -50px;
`;

const Img2 = styled.img`
  position: relative;
  top: 70px;
  left: 70px;
`;

const Box = styled.div`
  /* background-color: blue !important; */
  display: flex;
  flex-direction: row;

  margin: 10px;
  background-color: white;
  opacity: 0.8;

  height: 230px;
  width: 280px;

  div{
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 40px;
    margin-left: -30px;


    h2{
        font-size: 15px;
        font-weight: 300;

    }
  }
`;
export default Mix;
