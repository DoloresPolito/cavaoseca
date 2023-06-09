import React from "react";
import styled from "styled-components";

const Checkbox = ({ name, checked, setChecked }) => {
  return (
    <>
    <div style={{display:'flex', padding:"10px"}}>
      <CheckboxInput
        name={name}
        type="checkbox"
        checked={checked}
        onChange={setChecked}
      />
      <Label>{name}</Label>
      </div>
    </>
  );
};

const CheckboxInput = styled.input`
  accent-color: #6f5358;

`;

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #6a6f58;
  letter-spacing: 2px;

`;

export default Checkbox;
