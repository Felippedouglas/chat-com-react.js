import React from "react";
import * as C from "./styles";
import Header from "./header";
import Chats from "./chats";
import { useState } from "react";
import Profile from "./profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Sidebar = ({ setUserChat, userChat, newChat, setNewChat }) => {

  const [user] = useAuthState(auth);

  const [ screen, setScreen ] = useState('profile');

  return (
    <C.Container userChat={userChat}>
      <Header user={user} setUserChat={setUserChat} newChat={newChat} setNewChat={setNewChat} setScreen={setScreen}/>
      {screen == 'chats' &&
        <Chats setUserChat={setUserChat} userChat={userChat} newChat={newChat} setNewChat={setNewChat}/>
      }
      {screen == 'profile' &&
        <Profile user={user} setScreen={setScreen}/>
      }
    </C.Container>
  );

};

export default Sidebar;
