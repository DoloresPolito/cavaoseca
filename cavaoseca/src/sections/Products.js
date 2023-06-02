import React, { useState } from "react";
import { SectionProducts } from "../styles";
import { SimpleGrid, Box } from "@chakra-ui/react";
import styled from "styled-components";
import tintos from "../assets/animation/tintos1.png";
import blancos from "../assets/animation/blancos1.png";
import espumantes from "../assets/animation/espumantes1.png";
import Navbar from "../components/Navbar";
// import carrito from "../assets/products/carrito.png";
import vinos from "../vinos";
import { useInput } from "../hooks/useInput";
import Modal from "../components/Modal";

const Products = () => {
  const [selectedWine, setSelectedWine] = useState({});

  const [scroll, setScroll] = useState(window.pageYOffset);

  const input = useInput("");

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  const [openModal, setOpenModal] = useState(false);

  const closing = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const opening = (vino) => {
    console.log("vino en modal", vino);
    setOpenModal(true);
    setSelectedWine(vino);
    document.body.style.overflow = "hidden";
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <div
        className="set_bg"
        style={{
          background: "#DAD6CC",
          width: "100%",
          height: "100%",
        }}
      >
        <Navbar props="products" />

        <SectionProducts mode={scroll}>
          <Left>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Search"
                onChange={input.onChange}
                value={input.value}
                type="search"
              ></input>
            </form>

            {/* <h2>Tipos de vino</h2>
            <ul>
              <li>
                <input type="checkbox" id="checkbox-1" />
                <label for="checkbox-1">Tintos</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-2" />
                <label for="checkbox-2">Blancos</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-3" />
                <label for="checkbox-3">Espumantes</label>
              </li>
            </ul> */}

            {/* <h2>Marcas</h2>
            <ul>
              <li>
                <input type="checkbox" id="checkbox-1" />
                <label for="checkbox-1">Rutini</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-2" />
                <label for="checkbox-2">Catena Zapata</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-3" />
                <label for="checkbox-3">Achaval Ferrer</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-1" />
                <label for="checkbox-1">Rutini</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-2" />
                <label for="checkbox-2">Catena Zapata</label>
              </li>
              <li>
                <input type="checkbox" id="checkbox-3" />
                <label for="checkbox-3">Achaval Ferrer</label>
              </li>
            </ul> */}
          </Left>
          <Right>
            <SelectProducts>
              <RedWines
              // mode={view} onClick={() => handleSelected("tintos")}
              >
                <img src={tintos} height="100%" width="80%" alt="tintos" />
              </RedWines>

              <WhiteWines
              //  mode={view} onClick={() => handleSelected("blancos")}
              >
                <img src={blancos} height="100%" width="80%" alt="blancos" />
              </WhiteWines>

              <SparklingWines
              // mode={view}
              // onClick={() => handleSelected("espumantes")}
              >
                <img
                  src={espumantes}
                  height="100%"
                  width="80%"
                  alt="espumantes"
                />
              </SparklingWines>
            </SelectProducts>

            <Catalog>
              <SimpleGrid
                columns={4}
                spacing={25}
                style={{ marginTop: "30px", marginLeft: "180px" }}
              >
                {vinos.map((vino) => {
                  return (
                    <>
                      <div>
                        <Box
                          bg="transparent"
                          height="190px"
                          width="110px"
                          borderRadius={"3px"}
                        >
                          <div
                            style={{
                              backgroundColor: "#eae9e5",
                              height: "100px",
                              width: "170px",
                              marginBottom: "80px",
                            }}
                            className="image-container"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {/* <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6A6F58", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="20px"
         width="20px"/></button> */}
                            <img
                              src={`/vinos/grilla/${vino.name}.png`}
                              height="240px"
                              width="160px"
                              alt="vino"
                              style={{ marginTop: "0px", marginLeft: "0px" }}
                            />

                            {hovered && (
                              <div
                                className="overlay"
                                onClick={() => opening(vino)}
                              >
                                <p>{vino.name}</p>
                              </div>
                            )}
                          </div>
                        </Box>

                        <Info>
                          <WineName>
                            <p> {vino.winery}</p>
                            <p> {vino.name}</p>
                            <p> {vino.type}</p>
                            {/* <button onClick={() => opening(vino)}>
                              <p>ver mas</p>
                            </button> */}

                            <Modal
                              open={openModal}
                              selectedWine={selectedWine}
                              onClose={() => closing()}
                            />
                          </WineName>

                          <WinePrice>
                            <bold> {vino.price}</bold>
                          </WinePrice>
                          {/* <p>3 cuotas de $3.600</p> */}
                          {/* <button>ENVIO GRATIS</button> */}
                        </Info>
                      </div>
                    </>
                  );
                })}
              </SimpleGrid>
            </Catalog>
          </Right>
        </SectionProducts>
      </div>
    </>
  );
};
const SelectProducts = styled.div`
  height: 150px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  padding-top: 50px;
`;

const RedWines = styled.div`
  display: flex;
  align-items: center;

  /* img {
    display: ${(props) => (props.mode !== "tintos" ? "flex" : "none")};
  }

  div img {
    display: ${(props) => (props.mode !== "tintos" ? "none" : "flex")};
  } */

  /* span {
    position: absolute;
    left: 223px;
  } */
  /* span img {
    display: ${(props) => (props.mode !== "tintos" ? "none" : "inline")};
  }

  :hover {
    img {
      display: none;
    }
    div img {
      display: flex;
    }
  } */
`;

const WhiteWines = styled.div`
  display: flex;
  align-items: center;

  /* img {
    display: ${(props) => (props.mode !== "blancos" ? "flex" : "none")};
  }

  div img {
    display: ${(props) => (props.mode !== "blancos" ? "none" : "flex")};
  } */

  /* span {
    position: absolute;
    left: 223px;
  }
  span img {
    display: ${(props) => (props.mode !== "blancos" ? "none" : "inline")};
  } */

  /* :hover {
    img {
      display: none;
    }
    div img {
      display: flex;
    }
  } */
`;

const SparklingWines = styled.div`
  display: flex;
  align-items: center;

  /* img {
    display: ${(props) => (props.mode !== "espumantes" ? "flex" : "none")};
  }

  div img {
    display: ${(props) => (props.mode !== "espumantes" ? "none" : "flex")};
  } */

  /* span {
    position: absolute;
    left: 223px;
  }
  span img {
    display: ${(props) => (props.mode !== "profile" ? "none" : "inline")};
  } */

  /* :hover {
    img {
      display: none;
    }
    div img {
      display: flex;
    }
  } */
`;

const WineName = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  justify-content: flex-start;
  align-items: flex-start;

  p {
    color: #6a6f58 !important;
    font-size: 14px !important;
    font-family: "Poppins";
    font-weight: 500 !important;
    text-align: left;

    line-height: 1 !important;
    margin: 5px;
  }
`;

const WinePrice = styled.p`
  color: #6a6f58 !important;
  font-size: 15px !important;
  font-family: "Poppins";
  font-weight: 600;
  text-align: left;
  margin: 0;
  line-height: 1;
  margin-top: 5px;
`;

export const Line = styled.div`
  border: 0.5px solid #252525;
  max-width: 100px;
  margin-bottom: 10px;

  @media only screen and (max-width: 975px) {
    max-width: 250px;
    margin-left: 30px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 285px;
    margin-left: 10px;
  }
`;

const Catalog = styled.div`
  height: 100%;

  margin-top: 50px;
  margin-bottom: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p {
    line-height: 1;
    align-self: flex-start;
    color: #6f5358;
    font-size: 13px;
  }
  button {
    background-color: #eae9e5;
    color: #6a6f58;
    border: none;
    border-radius: 2px;
    letter-spacing: 1px;
    height: 25px;
    width: 70%;
    margin-top: 20px;
    font-size: 11px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 100px;

  form {
    color: black;
  }

  input {
    color: black;
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 25px;
    padding: 20px;
  }

  h2 {
    font-family: "Bebas Neue", cursive;
    color: #6a6f58;
    letter-spacing: 2px;
  }

  ul {
    list-style: none;
    text-align: left;
  }

  li {
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
    background-color: red !important;
  }

  label {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Products;
