import React, { useState, useEffect } from "react";
import { Section, Title, Subtitle, SectionProducts } from "../styles";
import { SimpleGrid, Box } from "@chakra-ui/react";
import wine from "../assets/250X200.png";
import styled from "styled-components";
import tintos from "../assets/tintos1.png";
import blancos from "../assets/blancos1.png";
import espumantes from "../assets/espumantes1.png";
import tintosword from "../assets/tintos3.png";
import blancosword from "../assets/blancos3.png";
import espumantesword from "../assets/espumantes3.png";
import Navbar from "../components/Navbar";
import carrito from "../assets/products/carrito.png"

const Products = () => {
  const [selected, setSelected] = useState("");
  const [view, setView] = useState("");

  const handleSelected = (view) => {
    setSelected(view);
    console.log("view", view);
  };
  const [scroll, setScroll] = useState(window.pageYOffset);

  return (
    <>
      <>
        <div
          className="set_bg"
          style={{
            // backgroundImage: "url('photo3.jpg')",
            width: "100%",
            height: "auto",
          }}
        >
          <Navbar />

          <SectionProducts
            mode={scroll}
            style={{ backgroundColor: "#DAD6CC", color: "#fefefe" }}
          >
            <Left>
           
              <h2>Tipos de vino</h2>
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
              </ul>

              <h2>Marcas</h2>
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
              </ul>
            </Left>
            <Right>
              <SelectProducts>
                <RedWines mode={view} onClick={() => handleSelected("tintos")}>
                  <div>
                    <img
                      src={tintosword}
                      height="100%"
                      width="80%"
                      alt="tintos"
                    />
                  </div>
                  <img src={tintos} height="100%" width="80%" alt="tintos" />

                  <span>
                    <img src={tintosword} alt="tintos" />
                  </span>
                </RedWines>

                <WhiteWines
                  mode={view}
                  onClick={() => handleSelected("blancos")}
                >
                  <div>
                    <img
                      src={blancosword}
                      height="100%"
                      width="80%"
                      alt="blancos"
                    />
                  </div>
                  <img src={blancos} height="100%" width="80%" alt="blancos" />
                </WhiteWines>

                <SparklingWines
                  mode={view}
                  onClick={() => handleSelected("espumantes")}
                >
                  <div>
                    <img
                      src={espumantesword}
                      height="100%"
                      width="80%"
                      alt="espumantes"
                    />
                  </div>
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
                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>

                  <div>
                    <Box
                      bg="white"
                      height="220px"
                      width="170px"
                      borderRadius={"3px"}
                    >
                      <div>
                        <button style={{position:"relative", left:"50px", top:"10px", backgroundColor:"#6f5358", border:"none", borderRadius:"30px", padding:"7px"}}><img src={carrito}    height="23px"
                          width="25px"/></button>
                        <img
                          src={wine}
                          height="190px"
                          width="140px"
                          alt="rutini"
                          style={{ marginTop:"-15px"}}
                        />
                      </div>
                    </Box>
                    <Info>
                      <WineName>
                        Lorem ipsum generator <br />
                        Malbec
                      </WineName>

                      <WinePrice>
                        <bold>$11.000</bold>
                      </WinePrice>
                      <p>3 cuotas de $3.600</p>
                      <button>ENVIO GRATIS</button>
                    </Info>
                  </div>
                
                </SimpleGrid>
              </Catalog>
            </Right>
          </SectionProducts>
        </div>
      </>
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

  img {
    display: ${(props) => (props.mode !== "tintos" ? "flex" : "none")};
  }

  div img {
    display: ${(props) => (props.mode !== "tintos" ? "none" : "flex")};
  }

  /* span {
    position: absolute;
    left: 223px;
  } */
  span img {
    display: ${(props) => (props.mode !== "tintos" ? "none" : "inline")};
  }

  :hover {
    img {
      display: none;
    }
    div img {
      display: flex;
    }
  }
`;

const WhiteWines = styled.div`
  display: flex;
  align-items: center;

  img {
    display: ${(props) => (props.mode !== "blancos" ? "flex" : "none")};
  }

  div img {
    display: ${(props) => (props.mode !== "blancos" ? "none" : "flex")};
  }

  /* span {
    position: absolute;
    left: 223px;
  }
  span img {
    display: ${(props) => (props.mode !== "blancos" ? "none" : "inline")};
  } */

  :hover {
    img {
      display: none;
    }
    div img {
      display: flex;
    }
  }
`;

const SparklingWines = styled.div`
  display: flex;
  align-items: center;

  img {
    display: ${(props) => (props.mode !== "espumantes" ? "flex" : "none")};
  }

  div img {
    display: ${(props) => (props.mode !== "espumantes" ? "none" : "flex")};
  }

  /* span {
    position: absolute;
    left: 223px;
  }
  span img {
    display: ${(props) => (props.mode !== "profile" ? "none" : "inline")};
  } */

  :hover {
    img {
      display: none;
    }
    div img {
      display: flex;
    }
  }
`;

const WineName = styled.p`
  color: #252525 !important;
  font-size: 14px !important;
  font-family: "Poppins";
  font-weight: 400;
  text-align: left;
  line-height: 1;
`;

const WinePrice = styled.p`
  color: #252525 !important;
  font-size: 15px !important;
  font-family: "Poppins";
  font-weight: 600;
  text-align: left;
  margin: 0;
  line-height: 1;
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
    background-color: #6f5358;
    color: white;
    border: none;
    border-radius: 2px;
    letter-spacing: 1px;
    height: 25px;
    width: 70%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 100px;

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
