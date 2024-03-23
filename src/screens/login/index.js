import React from "react";
import * as C from "./styles";
import { auth, provider } from "../../services/firebase";
import { MdMessage } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  
  const handleSignin = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <C.Container>
      <MdMessage />
      <C.Title>Shatt</C.Title>
      <C.Info>Envie e receba mensagens de qualquer lugar, utilizando apenas o seu e-mail.</C.Info>
      <C.Button onClick={handleSignin}><FcGoogle />Login com Google</C.Button>
    </C.Container>
  );
};

export default Login;
