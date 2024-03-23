import React from "react";
import { Oval } from 'react-loading-icons'
import * as C from "./styles";

const Load = ({ showIcon }) => {
  return (
    <C.Container showIcon={showIcon}>
      {showIcon &&
        <C.Logo>Shatt</C.Logo>
      }
      <Oval stroke="#fff" fontSize={20} />
    </C.Container>
  );
};

export default Load;
