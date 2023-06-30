import React from "react";
import styled from "styled-components";
import mancha1 from "../assets/Mancha 3.png";
import mancha2 from "../assets/Manch 4.png";
import vino1 from "../assets/vinos/grilla/Bressia Lagrima Canela.png";
import vino2 from "../assets/vinos/grilla/Gran Enemigo Gualtallary.png";
import vino3 from "../assets/vinos/grilla/Dv Catena Chardonnay.png";
import vino4 from "../assets/vinos/grilla/Rutini Coleccion Malbec.png";
import vino5 from "../assets/vinos/grilla/Saint Felicien Chardonnay.png";
import vino6 from "../assets/vinos/grilla/Felino.png";
import vino7 from "../assets/vinos/grilla/Cocodrilo.png";
import vino8 from "../assets/vinos/grilla/Dv Catena Malbec Malbec.png";

const Mix = () => {
  return (
    <>
      <MixSection id="mix">
        <Top>
          <Img1 src={mancha1} />
          <h2>Elegí 6 vinos de nuestro catalogo y arma una caja a tu gusto!</h2>
          <Img2 src={mancha2} />
        </Top>
        <Bottom>
          <BoxContainer>
            <Box>
              <img src={vino1} />
              <div>
                <h2>Bressia Lagrima Canela</h2>
                <h3>CHARDONNAY</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino2} />
              <div>
                <h2>Gualtallary</h2>
                <h3>malbec</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino3} />
              <div>
                <h2>DV Catena Chardonnay</h2>
                <h3>cabernet franc</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino4} />
              <div>
                <h2>Rutini Coleccion Malbec</h2>
                <h3>malbec</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino5} />
              <div>
                <h2>Saint Felicien Malbec</h2>
                <h3>malbec</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
            <img src={vino7} />
              <div>
                <h2>Cocodrilo</h2>
                <h3>cabernet sauvignon</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
      

              <img src={vino6} />
              <div>
                <h2>Felino</h2>
                <h3>CHARDONNAY</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino8} />
              <div>
                <h2>DV Catena </h2>
                <h3>syrah</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>


            </Box>
          </BoxContainer>
        </Bottom>
      </MixSection>
    </>
  );
};

const MixSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6f5358;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  h2 {
    color: white;
    font-family: "Cormorant", serif;
    font-size: 28px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    /* font-family: "Cinzel", sans-serif; */
    font-weight: 500;
    /* margin-left: 100px; */
    line-height: 40px;
    max-width: 800px;
    z-index: 1000;

    @media only screen and (max-width: 900px) {
      max-width: 500px;
    }

    @media only screen and (max-width: 600px) {
      max-width: 400px;
      font-size: 23px;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 50%;
  background-color: white;
  background-image: url("./fondomix.png");
  z-index: 100;
  padding: 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  width: 80%;
`;

const Img1 = styled.img`
  position: absolute;
  top: 1428px;
  left: -50px;
`;

const Img2 = styled.img`
  position: absolute;
  top: 1428px;
  left: 1000px;

  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;

  margin: 10px;
  background-color: white;
  opacity: 0.8;

  height: 230px;
  width: 250px;

  img {


    position: relative;
    left: -40px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 40px;
    margin-left: -60px;


    h2 {
      font-size: 12px;
      font-weight: 600;
      font-family: "Cinzel", sans-serif;
      text-transform: uppercase;
      color: #5b5a5a;
      text-align: start;
    }

    h3 {
      font-size: 12px;
      font-weight: 600;
      font-family: "Roboto";
      text-transform: uppercase;
      color: #6a7059;
      text-align: start;
    }

    button {
      background-color: #6a7059;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      /* margin-top: 30px; */
      position: relative;
      top: 50px;

      p {
        margin-top: 6px;
      }
    }
  }
`;
export default Mix;
