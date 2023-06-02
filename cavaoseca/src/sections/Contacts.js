import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import instagram from "../assets/contact/instagram-white.png";
import whatsapp from "../assets/contact/whatsapp-white.png";
// import emailjs from "emailjs-com";
import backgroundImage from "../assets/fondos/nuevo_loli_pruebacontacto.png"
import Modal from "../components/Modal";

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

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
        }}
      >
        <Navbar />


        <FormContainer
        
        >
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
      </div>
    </>
  );
};

const FormContainer = styled.div`
  width: 60%;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;

  @media only screen and (max-width: 1045px) {
    width: 500px;
  }
`;

const Form = styled.form`
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  padding-top: 100px;
  font-weight: 300;
  letter-spacing: 2px;

  @media only screen and (max-width: 535px) {
    width: 350px;
  }
  @media only screen and (max-width: 535px) {
    width: 400px;
  }

  button {
    padding-top: 50px;
    background-color: transparent;
    border: none;
    color: #f6f6f6;
    text-decoration: underline;
    cursor: pointer;
    font-size: 16px;
    margin-left: 0px;
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

export default Contact;
