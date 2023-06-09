import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import instagram from "../assets/contact/instagram-white.png";
import whatsapp from "../assets/contact/whatsapp-white.png";
// import emailjs from "emailjs-com";
import backgroundImage from "../assets/fondos/nuevo_loli_pruebacontacto.png";
import Modal from "../components/Modal";
import { SimpleGrid } from "@chakra-ui/react";

const Contact = () => {
  //   const frmContact = { userName: ``, userEmail: ``, message: `` };
  //   const [contact, setContact] = useState("");
  //   const [showMessage, setShowMessage] = useState(false);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setContact({ ...contact, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
  //       .then(
  //         (response) => {
  //           console.log(`SUCCESS!`, response.status, response.text);
  //           setContact(frmContact);
  //           setShowMessage(true);
  //         },
  //         (err) => {
  //           console.log(`FAILED...`, err);
  //         }
  //       );
  //   };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 1230;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        {width >= medium ? (
          <>
            <Column1>
              <h4>
                HOLA! SOMOS MARCOS Y DOLORES. NOS ENCANTARÍA ASESORARTE Y QUE
                PUEDAS DISFRUTAR DE NUESTRA VARIEDAD.
              </h4>
              <h3>CONTACTANOS!</h3>
            </Column1>

            <Column2>
              <FormContainer>
                <Form
                  // onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Input
                    className="form-item"
                    placeholder="Nombre completo"
                    type="text"
                    required
                    // value={contact.userName}
                    name="userName"
                    // onChange={handleChange}
                  />

                  <Input
                    className="form-item"
                    placeholder="Email"
                    // value={contact.userEmail}
                    // onChange={handleChange}
                    name="userEmail"
                    type="text"
                    required
                  />

                  <Input
                    className="form-item"
                    placeholder="Mensaje"
                    // value={contact.message}
                    // onChange={handleChange}
                    name="message"
                    type="text"
                    required
                  />

                  <button type="submit" className="bottom-form">
                    Enviar
                  </button>
                </Form>
              </FormContainer>

              <Media>
                <a href="mailto:dolores.polito@gmail.com">
                  {" "}
                  {/* <img src={mail} alt="mail" /> */}
                </a>
                <a
                  href="https://www.instagram.com/cavaoseca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://wa.me/5493446584076"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </Media>
            </Column2>
          </>
        ) : (
          <>
            <div>
              <SingleColumn>
                <h4>
                  HOLA! SOMOS MARCOS Y DOLORES. NOS ENCANTARÍA ASESORARTE Y QUE
                  PUEDAS DISFRUTAR DE NUESTRA VARIEDAD.
                  <br />
                  <br />
                <span>CONTACTANOS!</span> 
                </h4>

                <FormContainer>
                  <Form
                    // onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Input
                      className="form-item"
                      placeholder="Nombre completo"
                      type="text"
                      required
                      // value={contact.userName}
                      name="userName"
                      // onChange={handleChange}
                    />

                    <Input
                      className="form-item"
                      placeholder="Email"
                      // value={contact.userEmail}
                      // onChange={handleChange}
                      name="userEmail"
                      type="text"
                      required
                    />

                    <Input
                      className="form-item"
                      placeholder="Mensaje"
                      // value={contact.message}
                      // onChange={handleChange}
                      name="message"
                      type="text"
                      required
                    />

                    <button type="submit" className="bottom-form">
                      Enviar
                    </button>
                  </Form>
                </FormContainer>
              </SingleColumn>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const FormContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (max-width: 1230px) {
    width: 80%;
    margin: 0 0;
    justify-content: center;
    align-items: center;
  }

  /* @media only screen and (max-width: 900px) {
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 60px;
  } */
`;

const Form = styled.form`
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  font-weight: 300;
  letter-spacing: 2px;

  @media only screen and (max-width: 1230px) {
    width: 100%;
  }

  button {
    padding: 10px;
    background-color: transparent;
    border: none;
    color: #f6f6f6;
    border: 1px solid #f6f6f6;
    cursor: pointer;
    font-size: 16px;
    margin-left: 390px;
    margin-top: 10px;
    border-radius: 10px;

    @media only screen and (max-width: 1230px) {
      margin-left: 0px;
    }
  }
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  height: 8px;
  margin: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.8px solid #f6f6f6;
`;

const Media = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;


  img {
    height: 30px;
    width: 30px;
    padding: 10px;
  }
`;

const Button = styled.button`
  position: fixed;
  top: 100px;
  right: 80px;
  background-color: black;
  border: 1.5px solid #ff5000;
  height: 40px;
  width: 150px;
  border-radius: 20px;
  z-index: 100;

  p {
    color: #ffffff;
    font-size: 14px;
    margin: auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
  }
`;

const Column2 = styled.div`
  width: 700px;
  height: 400px;

  padding-top: 100px;

  @media only screen and (max-width: 1230px) {
    width: 100%;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin-left: 40px;
  height: 700px;
  justify-content: center;

  @media only screen and (max-width: 1230px) {
    margin-left: 0px;
    width: 100%;
    align-items: center;
  }

  @media only screen and (max-width: 535px) {
    width: 80%;
  }

  h4 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 40px;
    margin-top: 50px;
    text-align: left;

    @media only screen and (max-width: 1230px) {
      font-size: 35px;
      width: 700px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 35px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
      width: auto;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 35px;
    margin-top: 10px;
    text-align: left;
    background-color: #536052;
    width: 190px;
    border-radius: 5px;
    padding:3px;
    padding-left: 6px;

    @media only screen and (max-width: 1230px) {
      font-size: 35px;
      width: 700px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 30px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
      width: auto;
    }
  }


`;

const SingleColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  margin: 0 auto;

  h4 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 40px;
    margin-top: 50px;
    text-align: left;
    width: auto;
    max-width: 800px;
    flex-direction: column;

    @media only screen and (max-width: 1230px) {
      font-size: 35px;
      /* width: 700px; */
    }

    @media only screen and (max-width: 700px) {
      font-size: 35px;
      /* width: 400px; */
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 35px;
    margin-top: 10px;
    text-align: left !important;  
    /* background-color: green; */

    @media only screen and (max-width: 1230px) {
      font-size: 35px;
      width: 700px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 30px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
      width: auto;
    }
  }

  span{
    background-color: #536052;
    width: 190px;
    border-radius: 5px;
    padding:3px;
    padding-left: 12px;
  }

`;

export default Contact;
