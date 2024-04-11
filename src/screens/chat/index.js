import React, { useState } from "react";
import * as C from "./styles";
import Default from "./../default";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import ArchivesPopUp from "../../components/archives-pop-up";


const Chat = ({ user, userChat, setUserChat, setNewChat }) => {

  const [ messages, setMessages ] = useState({});

  const [ showUserDetails, setShowUserDetails ] = useState(false);

  const [ showReply, setShowReply ] = useState(false);
  const [ messageReply, setMessageReply ] = useState({});

  const [ sendFile, setSendFile ] = useState(false);
  const [ filesSendLength, setFilesSendLength ] = useState();
  const [ isOpenPopUpSendArchives, setIsOpenPopUpSendArchives ] = useState(false);
  const [fileType, setFileType] = useState(undefined);

  const [ userInfo, setUserInfo ] = useState(null);

  const [ showPopUpArchives, setShowPopUpArchives ] = useState(false);
  const [ archive, setArchive ] = useState({});
  const [ archives, setArchives ] = useState({});

  if (!userChat) return <Default />;

  return (
    <C.Container>
      <Header user={user} chatId={userChat?.chatId} setArchive={setArchive} setShowPopUpArchives={setShowPopUpArchives} showUserDetails={showUserDetails} setShowUserDetails={setShowUserDetails} userChat={userChat} setUserChat={setUserChat} userInfo={userInfo} setUserInfo={setUserInfo} />
      {!filesSendLength >= 1 &&
        <Body isOpenPopUpSendArchives={isOpenPopUpSendArchives} messages={messages} setMessages={setMessages} setIsOpenPopUpSendArchives={setIsOpenPopUpSendArchives} showUserDetails={showUserDetails} sendFile={sendFile} setShowUserDetails={setShowUserDetails} chatId={userChat?.chatId} userInfo={userInfo} setUserInfo={setUserInfo} setNewChat={setNewChat} setSendFile={setSendFile} showReply={showReply} setShowReply={setShowReply}
        messageReply={messageReply} setMessageReply={setMessageReply} setFileType={setFileType} setArchive={setArchive} setArchives={setArchives} setShowPopUpArchives={setShowPopUpArchives}/>
      }
      <Footer userInfo={userInfo} isOpenPopUpSendArchives={isOpenPopUpSendArchives} setIsOpenPopUpSendArchives={setIsOpenPopUpSendArchives} chatId={userChat?.chatId} sendFile={sendFile} setSendFile={setSendFile} filesSendLength={filesSendLength} setFilesSendLength={setFilesSendLength} setShowReply={setShowReply} messageReply={messageReply} setMessageReply={setMessageReply} fileType={fileType} setFileType={setFileType}/>
      {showPopUpArchives &&
        <ArchivesPopUp user={userInfo} archive={archive} archives={archives} setShowPopUpArchives={setShowPopUpArchives}/>
      }
    </C.Container>
  );
};

export default Chat;
