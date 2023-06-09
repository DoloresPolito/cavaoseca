import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Modal = ({ open, onClose, selectedWine }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView || open) {
      controls.start("visible");
    }
    if (!open) {
      controls.start("hidden");
    }
  }, [controls, inView, open]);

  if (!open) return null;

  return (
    <>
      <Overlay onClick={onClose}>
        <div ref={ref}>
          <ModalContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <>
              <CloseButton onClick={onClose}>X
              </CloseButton>

              <Content>
                <div
                  style={{
                    height: "500px",
                    width: "300px",
                    position: "relative",
                  }}
                >
                  <img
                    src={`/vinos/singlewine/${selectedWine.name}.png`}
                    height="240px"
                    width="160px"
                    alt="vino"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "-50px",
                      width: "300px",
                      height: "500px",
                    }}
                  />
                </div>
                <Line />

                <Description>
                  <TitleContainer>
                    <h2>{selectedWine.name}</h2>
                    <div/>
                    <h4>{selectedWine.type}</h4>
                  </TitleContainer>
                  <p>{selectedWine.description}</p>

                  <h6>$ 4.500</h6>
                </Description>
              </Content>
            </>
          </ModalContainer>
        </div>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;
const ModalContainer = styled.div`
  max-width: 700px;
  width: 100%;
  position: fixed;
  top: 40% !important;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(128, 128, 128, 0.2);
  /* box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75); */
  border-radius: 8px;
  margin-top: 50px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;


  h2 {
    color: #6a6f58;
    font-size: 25px;
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    margin-top: -30px;
    margin-bottom: 30px;
    margin-top: 20px;
  }

  h4 {
    color: #6a6f58;
    font-size: 30px;
    font-family: "Bebas Neue", cursive;
    font-style: normal;
    font-weight: 300;
    margin-top: -10px;

  }

  div{
    border-top: 0.5px solid #6a6f58;
  width: 280px;
  position: absolute;
  margin-top: 60px;
  }


`;

const CloseButton = styled.p`
  position: fixed;
  top: 8px;
  right: 8px;
  cursor:pointer
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: flex-start;
  margin-top: 3rem;
  padding: 1rem 2rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: flex-start;
  max-width: 350px;

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.2px;
    line-height: 35px;
    color: #6a6f58;
    margin-top: 50px;
    text-align: left;
    font-weight: 400;
  }

  h6{
    color: #6a6f58 !important;
    font-size: 25px;
    font-family: "Bebas Neue", cursive;
    font-style: normal;
    font-weight: 300;
    text-align: start;
    border-bottom: 0.5px solid #6a6f58;
    max-width: 70px;
  }

  
`;



const Line = styled.div`
  border-left: 0.5px solid #6a6f58;
  height: 580px;
  position: absolute;
  left: 38%;
  margin-top: -64px;
`;

export default Modal;
