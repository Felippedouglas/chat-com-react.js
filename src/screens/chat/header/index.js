import React, { useState, useEffect } from "react";
import * as C from "./styles";
import GetUserDetails from "../../../components/get-user-details";
import ConvertDate from "../../../components/convert-date";
import FullImage from "../../../components/archives-pop-up";
import { MdMoreVert, MdPerson } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { BiError } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { db, auth } from '../../../services/firebase'
import { doc, setDoc } from "firebase/firestore";

const ChatHeader = ({ userChat, setUserChat, userInfo, setUserInfo, showUserDetails, setShowUserDetails, setShowPopUpArchives, setArchive }) => {
  
  const [onlineStatus, setOnlineStatus] = useState(false);

  useEffect(() => {

      verifyOnline(userInfo);

  }, [userInfo]);

  const verifyOnline = (userInfo) => {
    if (!userInfo || !userInfo.onlineAt) {
        setOnlineStatus(false); // Definir como offline se não houver informações de online
        return;
    }
    
    const onlineAtSeconds = userInfo.onlineAt.seconds || 0; // Obter o timestamp online em segundos
    const currentTimestamp = Math.floor(Date.now() / 1000); // Obter o timestamp atual em segundos

    // Verificar se o timestamp online é maior que o timestamp atual
    const isOnline = onlineAtSeconds > currentTimestamp;

    setOnlineStatus(isOnline); // Atualizar o status online
  };

  const openArchive = ()=> {
    setArchive({
      src: String(userInfo.photoURL).replace("s96", "s1000"),
      name: 'User avatar',
      type: 'image'
    });

    setShowPopUpArchives(true);
  }

  return (
    <C.Container>
      <GetUserDetails userEmail={userChat.email} setUserInfo={setUserInfo} />
      <C.UserInfo>
        {!showUserDetails && (
          <C.BackDefault onClick={() => setUserChat()}>
            <IoIosArrowBack />
          </C.BackDefault>
        )}
        {userChat.photoURL ? (
          <C.Avatar src={userChat.photoURL} alt="user" onClick={() => openArchive(true)} />
        ) : (
          <MdPerson />
        )}
        <C.NameContent onClick={() => setShowUserDetails(true)}>
          <C.Name>{userInfo && userInfo.name ? userInfo.name : userChat.name}</C.Name>
          {userInfo && userInfo.lastLogin ? (
            <C.LastLogin>
              {!onlineStatus && <FiClock />}
              {onlineStatus ? "Online" : <ConvertDate date={userInfo.onlineAt ? userInfo.onlineAt.seconds : userInfo.lastLogin.seconds} />}
            </C.LastLogin>
          ) : (
            <C.LastLogin>
              <BiError /> Não cadastrado
            </C.LastLogin>
          )}
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <MdMoreVert onClick={() => setShowUserDetails(true)} />
      </C.Options>
    </C.Container>
  );
};

export default ChatHeader;