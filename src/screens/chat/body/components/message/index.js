import React, { useEffect, useState } from "react";
import * as C from "./styles";
import { db } from "../../../../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { BsCheckAll, BsCheckLg } from "react-icons/bs";
import firebase from "firebase/compat/app";
import ConvertDate from "../../../../../components/convert-date";
import Options from "./options";
import { HiDotsHorizontal } from "react-icons/hi";
import { MessageReply } from "./messageReply";
import Document from "./components/document";
import Deleted from "./components/deleted";
import Video from "./components/video";
import Image from "./components/Image";
import Text from "./components/text";
import Audio from "./components/audio";

const Message = ({ user, message, chatId, showOptions, setShowOptions, messageInfo, setMessageInfo, userLoggedIn, setShowReply, messageReply, setMessageReply, userInfo, message_reply, message_group_index, message_index, setShowPopUpArchives, setArchive, setArchives }) => {
  
  const [copied, setCopied] = useState(false);

  useEffect(() => {

    const markAsRead = async () => {
      if (!message.visualized && !message.deleted && userLoggedIn?.email !== user) {
        await updateDoc(doc(db, `/chats/${chatId}/messages/${message.id}`), {
          visualized: true,
          visulized_date: firebase.firestore.FieldValue.serverTimestamp(),
        })
      }
    };

    markAsRead();

  }, [message]);

  const openArchivePopUp = (archive)=> {
    setShowPopUpArchives(true);
    setArchive(archive);
  };
  
  const linkRegex = /(?:^|\s)(?:(?:https?|ftp):\/\/|www\.)?[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?(?=\s|$)/;

  function containsLink(text) {
      return linkRegex.test(text);
  }

  function replaceLinks(text) {
    return text.replace(linkRegex, (match) => {
      if (/^(?:https?|ftp):\/\//i.test(match)) {
            return `<a href="${match}" target="_blank">${match}</a>`;
        } else if (/^www\./i.test(match)) {
            return `<a href="https://${match}" target="_blank">${match}</a>`;
        } else {
            return `<a href="https://${match}" target="_blank">${match}</a>`;
        }
    });
  }

  function formatMessage(mensagem) {
      const hasLink = containsLink(mensagem);
      if (hasLink) {
          const words = mensagem.split(" ");
          const messageWithLinks = words.map((word) => replaceLinks(word)).join(" ");
          return messageWithLinks;
      } else {
          return mensagem;
      }
  }
  
  function defineOptions() {
    if (showOptions) {
      setShowOptions(null);
    } else {
      setShowOptions(message?.id);
      setMessageInfo(message);
    }
  }
  
  const defineMessageReply = (messageReply)=> {
    setMessageReply(null);
    setShowOptions(false);
    setMessageInfo(null);
    console.log(messageReply)
    
    setTimeout(() => {
        setShowReply(true);
        setMessageReply(messageReply);
    }, 100);
  }

  const Date = () => {
    return (
      <C.MessageDate
        className={userLoggedIn?.email !== user ? "other" : ""}
      >
        <span>
          {message?.date && <ConvertDate hourAndMinutes={message?.date?.seconds} />}
        </span>
        <span>
          {message.visualized && userLoggedIn?.email === user
            ? <BsCheckAll title="Visualizada" className="checkVisualized visualized" />
            : (!message.visualized && !message.deleted && userLoggedIn?.email === user
              ? <BsCheckLg title="Não visualizado" className="checkVisualized" />
              : null
            )
          }
        </span>
      </C.MessageDate>
    )
  }


  return (
    
    <C.Container id={message?.id}>

      {message &&
        <C.Line onDoubleClick={()=>defineMessageReply(message)} className={userLoggedIn?.email === user ? "me" : ""} active={messageReply?.id == message?.id} typeImage={message?.type == 'image' && !message?.deleted}>
          <C.Content className={userLoggedIn?.email !== user ? "content-me" : ""} typeImage={message?.type == 'image' && !message?.deleted}>
            {!message.deleted ? (              
              <C.Message className={userLoggedIn?.email === user ? "meMessage" : ""} typeImage={message?.type == 'image' && !message?.deleted}>
                {message_reply &&
                  <a href={`/#${message_reply.id}`} className="redirect-to-message-reply">
                    <MessageReply message={message_reply} userInfo={userInfo} typeMessage={message?.type}/>
                  </a>
                }
                {message?.type == 'document' &&
                  <Document document={message.file}>
                    <Date/>
                  </Document>
                }
                {message?.type == 'text' ? (
                  <Text message={message?.message}>
                    <div className="message-text" dangerouslySetInnerHTML={{ __html: formatMessage(message.message) }}></div>
                    <div className='date-text'>
                      <Date/>
                    </div>
                  </Text>
                ) : message?.type == 'image' ? (
                  <Image image={message?.file} openArchivePopUp={openArchivePopUp}>
                    <Date/>
                  </Image>
                ) : message?.type == 'video' ? (
                  <Video video={message.file} openArchivePopUp={openArchivePopUp}>
                    <Date/>
                  </Video>
                ) : message?.type == 'audio' ? (
                  <Audio audio={message.file}>
                    <Date/>
                  </Audio>
                ) : ''}
              </C.Message>
            ) : (
              <Deleted date={message?.date}/>
            )}
          </C.Content>
          {!message?.deleted &&
            <C.Options  className={`options ${userLoggedIn?.email === user && "me"}`} isActive={messageInfo?.id == message?.id}>
              <button className="bt-open" onClick={defineOptions} disabled={showOptions == message?.id}><HiDotsHorizontal/></button>
              {showOptions == message?.id &&
                <Options message={messageInfo} canDelete={userLoggedIn?.email === user} copied={copied} setCopied={setCopied} chatId={chatId} setShowOptions={setShowOptions} message_index={message_index} message_group_index={message_group_index} setMessageInfo={setMessageInfo} setShowReply={setShowReply} setMessageReply={setMessageReply} defineMessageReply={defineMessageReply}/>
              }
            </C.Options>
          }
        </C.Line>
      }
    </C.Container>
  );
};

export default Message;