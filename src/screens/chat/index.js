import React, { useState } from "react";
import * as C from "./styles";
import Default from "./../default";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const Chat = ({ userChat, setUserChat, setNewChat }) => {

  const [ messages, setMessages ] = useState({});

  const [ showUserDetails, setShowUserDetails ] = useState(false);

  const [ showReply, setShowReply ] = useState(false);
  const [ messageReply, setMessageReply ] = useState({});

  const [ sendFile, setSendFile ] = useState(false);
  const [ filesSendLength, setFilesSendLength ] = useState();
  const [ isOpenPopUpSendArchives, setIsOpenPopUpSendArchives ] = useState(false);
  const [fileType, setFileType] = useState(undefined);

  const [ userInfo, setUserInfo ] = useState(null);

  if (!userChat) return <Default />;

  return (
    <C.Container>
      <Header chatId={userChat?.chatId} showUserDetails={showUserDetails} setShowUserDetails={setShowUserDetails} userChat={userChat} setUserChat={setUserChat} userInfo={userInfo} setUserInfo={setUserInfo} />
      {!filesSendLength >= 1 &&
        <Body isOpenPopUpSendArchives={isOpenPopUpSendArchives} messages={messages} setMessages={setMessages} setIsOpenPopUpSendArchives={setIsOpenPopUpSendArchives} showUserDetails={showUserDetails} sendFile={sendFile} setShowUserDetails={setShowUserDetails} chatId={userChat?.chatId} userInfo={userInfo} setUserInfo={setUserInfo} setNewChat={setNewChat} setSendFile={setSendFile} showReply={showReply} setShowReply={setShowReply} messageReply={messageReply} setMessageReply={setMessageReply} setFileType={setFileType}/>
      }
      <Footer userInfo={userInfo} isOpenPopUpSendArchives={isOpenPopUpSendArchives} setIsOpenPopUpSendArchives={setIsOpenPopUpSendArchives} chatId={userChat?.chatId} sendFile={sendFile} setSendFile={setSendFile} filesSendLength={filesSendLength} setFilesSendLength={setFilesSendLength} setShowReply={setShowReply} messageReply={messageReply} setMessageReply={setMessageReply} fileType={fileType} setFileType={setFileType}/>
    </C.Container>
  );
};

export default Chat;
