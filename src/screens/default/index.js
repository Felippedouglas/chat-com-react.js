import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Shatt</C.Title>
      <C.Info>Envie e receba mensagens de qualquer lugar, utilizando apenas o seu e-mail.</C.Info>
    </C.Container>
  );
};

export default Default;
