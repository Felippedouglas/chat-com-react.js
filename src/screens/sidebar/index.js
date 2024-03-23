import React from "react";
import * as C from "./styles";
import Header from "./header";
import Chats from "./chats";
import { useState } from "react";

const Sidebar = ({ setUserChat, userChat, newChat, setNewChat }) => {

  const [ screen, setScreen ] = useState('chats');

  return (
    <C.Container userChat={userChat}>
      <Header setUserChat={setUserChat} newChat={newChat} setNewChat={setNewChat}/>
      {screen == 'chats' &&
        <Chats setUserChat={setUserChat} userChat={userChat} newChat={newChat} setNewChat={setNewChat}/>
      }
    </C.Container>
  );

};

export default Sidebar;
