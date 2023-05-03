import React, { useState} from "react";
import { Section, Title, Subtitle } from "../styles";
import tintos from "../assets/tintos1.png";
import blancos from "../assets/blancos1.png";
import espumantes from "../assets/espumantes1.png";
import tintosword from "../assets/tintos3.png";
import blancosword from "../assets/blancos3.png";
import espumantesword from "../assets/espumantes3.png";
import styled from "styled-components";


const Animation = () => {
  const [selected, setSelected] = useState("");
  const [view, setView] = useState("");

  const handleSelected = (view) => {
    setSelected(view);
    console.log("view", view);
  };
  return (
    <>
      <Section style={{ backgroundColor: "#F7F7F7", color: "#fefefe" }}>
        <SelectProducts>
          <RedWines mode={view} onClick={() => handleSelected("tintos")}>
            <div>
              <img src={tintosword} height="100%" width="80%" alt="tintos" />
            </div>
            <img src={tintos} height="100%" width="80%" alt="tintos" />

            <span>
              <img src={tintosword} alt="tintos" />
            </span>
          </RedWines>

          <WhiteWines mode={view} onClick={() => handleSelected("blancos")}>
            <div>
              <img src={blancosword} height="100%" width="80%" alt="blancos" />
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
            <img src={espumantes} height="100%" width="80%" alt="espumantes" />
          </SparklingWines>
        </SelectProducts>
      </Section>
    </>
  );
};

const SelectProducts = styled.div`
  height: 300px;
  width: 800px;
  display: flex;
  justify-content: center;
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

export default Animation;
