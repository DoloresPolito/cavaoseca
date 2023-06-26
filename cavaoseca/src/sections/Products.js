import React, { useEffect, useState } from "react";
import { SectionProducts } from "../styles";
import { SimpleGrid, Box } from "@chakra-ui/react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import vinos from "../vinos";
import { useInput } from "../hooks/useInput";
import Modal from "../components/Modal";
import copasverdes from "../assets/copasverde.png";
import backgroundImage from "../assets/fondos/fondo_producto.png";
import Checkbox from "../components/Checkbox";
import { useChecked } from "../hooks/useChecked";
import ProductsFooter from "./ProductsFooter";
import { useLocation } from "react-router-dom";
import images from "./images";

import cocodrilo from "../assets/vinos/grilla/Cocodrilo.png";
import bramarevalledeuco from "../assets/vinos/grilla/Bramare Valle De Uco.png";
import bramarelujandecuyo from "../assets/vinos/grilla/Bramare Valle De Uco.png";
import bramarepinotnoir from "../assets/vinos/grilla/Bramare Pinot Noir.png";
import felino from "../assets/vinos/grilla/Felino.png";
import judasmalbec from "../assets/vinos/grilla/Judas Malbec.png";
import judasblend from "../assets/vinos/grilla/Judas Blend.png";
import susanabalbosignature from "../assets/vinos/grilla/Susana Balbo Signature.png";
import briosso from "../assets/vinos/grilla/Brioso.png";
import closdelossiete from "../assets/vinos/grilla/Clos de Los Siete.png";
import rutinisauvignonblanc from "../assets/vinos/grilla/Rutini Colección Sauvignon Blanc.png";
import rutinimalbec from "../assets/vinos/grilla/Rutini Coleccion Malbec.png";
import rutinichardonnay from "../assets/vinos/grilla/Rutini Coleccion Chardonnay.png";
import rutinicabernetmalbec from "../assets/vinos/grilla/Rutini Coleccion Cabernet Malbec.png";
import black from "../assets/vinos/grilla/Black.png";
import zahamalbec from "../assets/vinos/grilla/Zaha Malbec.png";
import zahacabernetfranc from "../assets/vinos/grilla/Zaha Cabernet Franc.png";
import artesano from "../assets/vinos/grilla/Artesano.png";

import findelmundosinglevineyardpinotnoir from "../assets/vinos/grilla/Fin del Mundo Single Vineyard Pinot Noir.png";
import findelmundosinglevineyardmalbec from "../assets/vinos/grilla/Fin del Mundo Single Vineyard Malbec.png";

import nicolacatenabonarda from "../assets/vinos/grilla/Nicola Catena Bonarda (vino de parcela).png";
import malbecargentino from "../assets/vinos/grilla/Malbec Argentino.png";

import dvcatenasyrah from "../assets/vinos/grilla/Dv Catena Syrah.png";
import dvcatenamalbecmalbec from "../assets/vinos/grilla/Dv Catena Malbec Malbec.png";
import dvcatenalapiramide from "../assets/vinos/grilla/Dv Catena La Pirámide.png";
import dvcatenachardonnay from "../assets/vinos/grilla/Dv Catena Chardonnay.png";
import dvcatenacabernetmalbec from "../assets/vinos/grilla/Dv Catena Cabernet Malbec.png";
import dvcatenacabernet from "../assets/vinos/grilla/Dv Catena Cabernet.png";

import angelicazapatamerlot from "../assets/vinos/grilla/Angelica Zapata Merlot.png";
import angelicazapatachardonnay from "../assets/vinos/grilla/Angelica Zapata Chardonnay.png";
import angelicazapatacabernetsauvignon from "../assets/vinos/grilla/Angelica Zapata Cabernet Sauvignon.png";
import angelicazapatacabernetfranc from "../assets/vinos/grilla/Angelica Zapata Cabernet Franc.png";
import saintfelicienmalbec from "../assets/vinos/grilla/Saint Felicien Malbec.png";
import bressiaprofundo from "../assets/vinos/grilla/Bressia Profundo.png";
import bressiapielnegra from "../assets/vinos/grilla/Bressia Piel Negra.png";

import bressiamonteagrelomalbec from "../assets/vinos/grilla/Bressia Monteagrelo Malbec.png";
import bressiamonteagrelocabernetfranc from "../assets/vinos/grilla/Bressia Monteagrelo Cabernet Franc.png";
import bressialagrimacanela from "../assets/vinos/grilla/Bressia Lagrima Canela.png";
import bressiaconjuro from "../assets/vinos/grilla/Bressia Conjuro.png";
import lucapinotnoir from "../assets/vinos/grilla/Luca Pinot Noir.png";
import lucachardonnay from "../assets/vinos/grilla/Luca Chardonnay.png";
import lucabesodedante from "../assets/vinos/grilla/Luca Beso de Dante.png";

import carolauracatena from "../assets/vinos/grilla/Caro - Laura Catena.png";

import granenemigocorte from "../assets/vinos/grilla/Gran Enemigo Corte.png";
import granenemigogualtallary from "../assets/vinos/grilla/Gran Enemigo Gualtallary.png";
import granenemigochacayes from "../assets/vinos/grilla/Gran Enemigo Chacayes.png";
import granenemigoagrelo from "../assets/vinos/grilla/Gran Enemigo Agrelo.png";
import granenemigoelcepillo from "../assets/vinos/grilla/Gran Enemigo El Cepillo.png";
import elenemigomalbec from "../assets/vinos/grilla/El Enemigo Malbec.png";
import elenemigochardonnay from "../assets/vinos/grilla/El Enemigo Chardonnay.png";

import elenemigocabernetfranc from "../assets/vinos/grilla/El Enemigo Cabernet Franc.png";
import elenemigobonarda from "../assets/vinos/grilla/El Enemigo Bonarda.png";

import achavalferrercabernetfranc from "../assets/vinos/grilla/Achaval Ferrer Cabernet Franc.png";
import achavalferrermalbec from "../assets/vinos/grilla/Achaval Ferrer Malbec.png";

import achavalferrerquimera from "../assets/vinos/grilla/Achaval Ferrer Quimera.png";
const Products = () => {
  const [selectedWine, setSelectedWine] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const [scroll, setScroll] = useState(window.pageYOffset);
  const input = useInput("");
  const [wines, setWines] = useState(vinos);
  const [width, setWidth] = useState(window.innerWidth);

  const initialState = {
    tintos: false,
    blancos: false,
    espumantes: false,
  };

  const [checked, handleClickCheckbox] = useChecked(initialState);
  const location = useLocation();

  useEffect(() => {
    const obtenerVinos = async () => {
      try {
        setWines(vinos);
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };

    obtenerVinos();
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [wines, checked]);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("input.value", input.value);

    const vinosFiltrados = buscarVinos(input.value);
    console.log(vinosFiltrados);

    console.log("vinos filtrados", vinosFiltrados);

    setWines(vinosFiltrados);
  };

  const borrarFiltros = () => {
    setWines(vinos);
    input.value = "";
  };

  function buscarVinos(search) {
    console.log("entra a la funcion filtrar");
    const resultado = vinos.filter((vino) =>
      vino.name.toLowerCase().includes(search.toLowerCase())
    );
    return resultado;
  }

  function filtrarPorTipo(tipo) {
    console.log("entra a la funcion filtrar por tipo");
    const resultado = vinos.filter((vino) =>
      vino.tipo.toLowerCase().includes(tipo.toLowerCase())
    );
    return resultado;
  }

  const [openModal, setOpenModal] = useState(false);

  const closing = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const opening = (vino, imagenVariable) => {
    setOpenModal(true);
    setSelectedWine(vino);
    setSelectedImage(imagenVariable);
    document.body.style.overflow = "hidden";
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imagenes = {
    bramarevalledeuco,
    bramarelujandecuyo,
    bramarepinotnoir,
    felino,
    cocodrilo,
    judasmalbec,
    judasblend,
    susanabalbosignature,
    briosso,
    closdelossiete,
    rutinisauvignonblanc,
    rutinimalbec,
    rutinichardonnay,
    rutinicabernetmalbec,
    black,
    zahamalbec,
    zahacabernetfranc,
    artesano,
    findelmundosinglevineyardpinotnoir,
    findelmundosinglevineyardmalbec,
    nicolacatenabonarda,
    malbecargentino,
    dvcatenasyrah,
    dvcatenamalbecmalbec,
    dvcatenalapiramide,
    dvcatenachardonnay,
    dvcatenacabernetmalbec,
    dvcatenacabernet,
    angelicazapatamerlot,
    angelicazapatachardonnay,
    angelicazapatacabernetsauvignon,
    angelicazapatacabernetfranc,
    saintfelicienmalbec,
    bressiaprofundo,
    bressiapielnegra,
    bressiamonteagrelomalbec,
    bressiamonteagrelocabernetfranc,
    bressialagrimacanela,
    bressiaconjuro,
    lucapinotnoir,
    lucachardonnay,
    lucabesodedante,
    carolauracatena,
    granenemigocorte,
    granenemigogualtallary,
    granenemigochacayes,
    granenemigoagrelo,
    granenemigoelcepillo,
    elenemigomalbec,
    elenemigochardonnay,
    elenemigocabernetfranc,
    elenemigobonarda,
    achavalferrercabernetfranc,
    achavalferrermalbec,
    achavalferrerquimera,
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          minHeight: "100vh",
          backgroundSize: "1500px 1000px",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center center",
        }}
      >
        <Navbar props="products" />

        <SectionProducts mode={scroll}>
          {width > 1200 ? (
            <>
              <Left>
                <form onSubmit={handleSubmit}>
                  <input
                    onChange={input.onChange}
                    value={input.value}
                    type="search"
                    placeholder="Buscar por nombre"
                  />
                </form>
                <button onClick={borrarFiltros}>borrar filtros</button>

                <CheckboxContainer>
                  <Checkbox
                    name="tintos"
                    checked={checked.tintos}
                    setChecked={handleClickCheckbox}
                  />
                  <Checkbox
                    name="blancos"
                    checked={checked.blancos}
                    setChecked={handleClickCheckbox}
                  />
                  <Checkbox
                    name="espumantes"
                    checked={checked.espumantes}
                    setChecked={handleClickCheckbox}
                  />
                </CheckboxContainer>
              </Left>
              <Right>
                <SelectProducts>
                  <img src={copasverdes} />
                </SelectProducts>

                <Catalog>
                  <SimpleGrid columns={4} spacing={25}>
                    {wines.map((vino) => {
                      const imagenVariable = imagenes[vino.imagename];
                      return (
                        <>
                          <div key={vino.name}>
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
                                <img
                                  src={imagenVariable}
                                  height="240px"
                                  width="160px"
                                  alt="vino"
                                  style={{
                                    marginTop: "0px",
                                    marginLeft: "0px",
                                  }}
                                />

                                {hovered && (
                                  <div
                                    className="overlay"
                                    onClick={() => opening(vino, imagenVariable)}
                                  >
                                    <p>{vino.name}</p>
                                    <p>ver más</p>
                                  </div>
                                )}
                              </div>
                            </Box>

                            <Info>
                              <WineName>
                                {/* <p> {`${vino.ruta}`}</p> */}

                                <p className="winery"> {vino.winery}</p>
                                <p className="name"> {vino.name}</p>
                                <p className="type"> {vino.type}</p>

                                <Modal
                                  open={openModal}
                                  selectedWine={selectedWine}
                                  selectedImage={selectedImage}
                                  onClose={() => closing()}
                                />
                              </WineName>

                              <WinePrice>
                                <p>{vino.price}</p>
                                {/* <bold> </bold> */}
                              </WinePrice>
                            </Info>
                          </div>
                        </>
                      );
                    })}
                  </SimpleGrid>
                </Catalog>
              </Right>
            </>
          ) : (
            <>
              <VerticalContainer>
                <Top>
                  {" "}
                  <CheckboxContainer>
                    <Checkbox
                      name="tintos"
                      checked={checked.tintos}
                      setChecked={handleClickCheckbox}
                    />
                    <Checkbox
                      name="blancos"
                      checked={checked.blancos}
                      setChecked={handleClickCheckbox}
                    />
                    <Checkbox
                      name="espumantes"
                      checked={checked.espumantes}
                      setChecked={handleClickCheckbox}
                    />
                  </CheckboxContainer>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <input
                        onChange={input.onChange}
                        value={input.value}
                        type="search"
                        placeholder="Buscar por nombre"
                      />
                    </form>
                    <button onClick={borrarFiltros}>borrar filtros</button>
                  </div>
                </Top>
                <Catalog>
                  <SimpleGrid spacing={25} columns={width > 1000 ? 4 : 3}>
                    {wines.map((vino) => {
                      const imagenSrc = images(`./${vino.name}.png`).default;
                      console.log(imagenSrc); // Verifica la ruta de la imagen importada
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
                                <img
                                  // src={vino.ruta}
                                  src={imagenSrc}
                                  height="240px"
                                  width="160px"
                                  alt="vino"
                                  style={{
                                    marginTop: "0px",
                                    marginLeft: "0px",
                                  }}
                                />

                                {hovered && (
                                  <div
                                    className="overlay"
                                    onClick={() => opening(vino)}
                                  >
                                    <p>{vino.name}</p>
                                    <p>ver más</p>
                                  </div>
                                )}
                              </div>
                            </Box>

                            <Info>
                              <WineName>
                                <p className="winery"> {vino.winery}</p>
                                <p className="name"> {vino.name}</p>
                                <p className="price"> {vino.type}</p>
                                {/* <button onClick={() => opening(vino)}>
                              <p>ver mas</p>
                            </button> */}

                                <Modal
                                  open={openModal}
                                  selectedWine={selectedWine}
                                  selectedImage={selectedImage}
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
              </VerticalContainer>
            </>
          )}
        </SectionProducts>
        <ProductsFooter />
      </div>
    </>
  );
};
const SelectProducts = styled.div`
  height: 150px;
  width: 85%;
  display: flex;
  align-self: flex-end;
  padding-top: 50px;

  img {
    height: 200px;
    position: absolute;
    right: 130px;
  }

  form {
    color: black;
    margin-top: 70px;
  }

  input {
    color: black;
    height: 50px;
    width: 350px;
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

  .winery {
    /* color: #6a6f58 !important; */
    font-size: 14px !important;
    font-family: "Poppins";
    /* font-weight: 500 !important; */
    text-align: left;

    line-height: 1 !important;
    margin: 5px;


      font-size: 12px;
      font-weight: 600;
      font-family: "Cinzel", sans-serif;
      text-transform: uppercase;
      color: #5b5a5a;
    
  }

  .name {
    color: #6a6f58 !important;
    font-size: 14px !important;
    font-family: "Poppins";
    font-weight: 600 !important;
    text-align: left;

    line-height: 1 !important;
    margin: 5px;
  }

  .type {
    color: #6a6f58 !important;
    font-size: 14px !important;
    font-family: "Poppins";
    font-weight: 500 !important;
    text-align: left;

    line-height: 1 !important;
    margin: 5px;
    text-transform: uppercase;
  }
`;

const WinePrice = styled.button`
 width: 80px !important;
margin-top: 0px !important;
  p{
    color: #6a6f58 !important;
  font-size: 15px !important;
  font-family: "Poppins";
  font-weight: 600;
  text-align: left;
  margin: 0;

  }
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
  padding-top: 30px !important;

  position: relative;
  left: 80px;

  @media only screen and (max-width: 1200px) {
    padding-left: 0px !important;
    padding-top: 0px;
    margin: 0 auto;

    left: 0px !important;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

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
  width: 280px;
  margin-top: 100px;

  form {
    color: black;
  }

  input {
    color: black;
    height: 50px;
    width: 280px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    border: 1px solid #6a6f58;
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

  button {
    background-color: #6a6f58;
    border: none;
    color: #fefefe;
    padding: 10px;
    border-radius: 15px;
    width: 100px;
    margin-top: 10px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -80px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 70px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    color: black;
    @media only screen and (max-width: 1200px) {
      margin-top: 70px;
    }
  }

  input {
    color: black;
    height: 50px;
    width: 280px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    border: 1px solid #6a6f58;
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

  button {
    background-color: #6a6f58;
    border: none;
    color: #fefefe;
    padding: 10px;
    border-radius: 15px;
    width: 100px;
    margin-top: 10px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;

  width: 100%;
`;
export default Products;
