// import Checkbox from "./Checkbox";
// import React from "react";
// import { useChecked } from "../hooks/useChecked";
// import styled from "styled-components";

// const CheckboxGrid = () => {
//   const initialState = {
//     tintos: false,
//     blancos: false,
//     espumantes: false,
//   };

//   const [checked, handleClickCheckbox] = useChecked(initialState);

//   console.log(checked);
//   return (
//     <CheckboxContainer>
//       <Checkbox
//         name="tintos"
//         checked={checked.tintos}
//         setChecked={handleClickCheckbox}
//       />
//       <Checkbox
//         name="blancos"
//         checked={checked.blancos}
//         setChecked={handleClickCheckbox}
//       />
//       <Checkbox
//         name="espumantes"
//         checked={checked.espumantes}
//         setChecked={handleClickCheckbox}
//       />
//     </CheckboxContainer>
//   );
// };

// const CheckboxContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 200px;
//   margin-top: 70px;
// `;

// export default CheckboxGrid;
