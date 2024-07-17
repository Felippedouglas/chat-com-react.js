import React, { useState, useEffect, useRef } from "react";
import * as C from "./styles";
import { ImFolderUpload  } from "react-icons/im";
import { LuSendHorizonal } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { auth, db } from "../../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import UploadArchives from "./archives";

const ChatFooter = ({ chatId, userInfo, sendFile, setSendFile, filesSendLength , setFilesSendLength, isOpenPopUpSendArchives, setIsOpenPopUpSendArchives, messageReply, setMessageReply, setShowReply, fileType, setFileType }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  const refEmailInput = useRef(null);

  const sendMessage = (type, file) => {
    const messageData = {
      type: type,
      user: user.email,
      photoURL: user.photoURL,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    };
    
    if (messageReply?.id) {
      messageData.reply_message = messageReply.id;
    }

    if (type === 'text') {
      messageData.message = message;
    } else {
      messageData.file = file;
      messageData.loading = true;
    }

    db.collection("chats").doc(chatId).collection("messages").add(messageData).then(() => {
      db.collection("chats").doc(chatId).update({
        updated: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessageReply(null);
      setShowReply(false);
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message) {
      sendMessage('text');
      setMessage("");
    }
  };
  
  useEffect(() => {
    setSendFile(false);
    setIsOpenPopUpSendArchives(false);
  }, [chatId]);
  
  useEffect(() => {
    
    if (messageReply?.id) {
      refEmailInput.current.focus();
    }

  }, [messageReply]);

  return (
    <C.Container filesSendLength={filesSendLength}>
      <UploadArchives chatId={chatId} userInfo={userInfo} sendFile={sendFile} setSendFile={setSendFile} sendMessage={sendMessage} setFilesSendLength={setFilesSendLength} setIsOpenPopUpSendArchives={setIsOpenPopUpSendArchives} fileType={fileType} setFileType={setFileType}/>
      {!filesSendLength >= 1 &&
        <>
          <C.FilesButton onClick={() => setIsOpenPopUpSendArchives(!isOpenPopUpSendArchives)}>{isOpenPopUpSendArchives ? <CgClose /> : <ImFolderUpload  />}</C.FilesButton>
          <C.Form onSubmit={handleSendMessage}>
            <C.Input
              ref={refEmailInput}
              placeholder="Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
            <C.Send onClick={handleSendMessage}>
              <LuSendHorizonal/>
            </C.Send>
          </C.Form>
        </>
      }
    </C.Container>
  );
};

export default ChatFooter;