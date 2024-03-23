import React from "react";
import * as C from "./styles";
import { MdChat } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { auth, db } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "../../../components/new-chat";

const SidebarHeader = ({ setUserChat, newChat, setNewChat }) => {

  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  return (
    <C.Container>
      {!newChat &&
        <>
          <C.Avatar
            src={user?.photoURL}
          />
          <C.Options>
            <C.OptionsButton onClick={()=>setNewChat(true)} >
              <MdChat />
            </C.OptionsButton>
            <C.OptionsButton onClick={() => [auth.signOut(), setUserChat(null)]} >
              <FiLogIn />
            </C.OptionsButton>
          </C.Options>
        </>
      }
      {newChat &&
        <NewChat setNewChat={setNewChat} user={user} chatsSnapshot={chatsSnapshot}/>
      }
    </C.Container>
  );
};

export default SidebarHeader;
 