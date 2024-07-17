import React, { useEffect, useRef } from "react";
import { db, auth } from "../../../services/firebase";
import * as C from "./styles";
import Message from "./components/message";
import { useState } from "react";
import User from "./components/user";
import { useAuthState } from "react-firebase-hooks/auth";
import ModalArchives from "./components/modal-archives";
import Loading from "../../../components/load";
import Reply from "./components/reply";

const Body = ({ chatId, messages, setMessages, showUserDetails, setShowUserDetails, userInfo, isOpenPopUpSendArchives, setIsOpenPopUpSendArchives, setFileType, setSendFile, showReply, setShowReply, messageReply, setMessageReply, setShowPopUpArchives, setArchive, setArchives }) => {
  
  const [ user ] = useAuthState(auth);

  const [ allMessages, setAllMessages ] = useState([]);

  const [ messagesLoaded, setMessagesLoaded ] = useState(false);

  const refBody = useRef("");
  const refMessages = useRef(null);

  const [ messageInfo, setMessageInfo ] = useState(null);
  const [ showOptions, setShowOptions ] = useState(false);

  useEffect(() => {

    setMessagesLoaded(false);

    setMessages(null);
    setTimeout(()=>{
      const getMessages = db
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("date", "asc")
        .onSnapshot((snapshot) => {

          const objetosSeparadosPorData = {};
          const allMessages = [];

          // Itera sobre cada objeto QueryDocumentSnapshot
          snapshot?.forEach(snapshot => {
            // Obtém os dados do objeto snapshot
            const id = snapshot.id;
            const visualized = snapshot.data().visualized;
            const dataDeleted = snapshot.data().dataDeleted;
            const date = snapshot.data().date;
            const deleted = snapshot.data().deleted;
            const file = snapshot.data().file;
            const message = snapshot.data().message;
            const photoURL = snapshot.data().photoURL;
            const src = snapshot.data().src;
            const type = snapshot.data().type;
            const user = snapshot.data().user;
            const reply_message = snapshot.data().reply_message;

            
            // Converte o timestamp em uma string de data legível
            const data = timestampToDate(date?.seconds * 1000);

            // Verifica se a data já existe no objeto de objetosSeparadosPorData
            if (!objetosSeparadosPorData[data]) {
              objetosSeparadosPorData[data] = []; // Inicializa um array vazio se a data ainda não estiver presente no objeto
            }

            allMessages.push({
              id,
              visualized,
              dataDeleted,
              date,
              deleted,
              file,
              message,
              photoURL,
              src,
              type,
              user,
              reply_message
            });

          // Adiciona um novo objeto contendo os dados ao array correspondente à sua data
          objetosSeparadosPorData[data].push({
            id,
            visualized,
            dataDeleted,
            date,
            deleted,
            file,
            message,
            photoURL,
            src,
            type,
            user,
            reply_message,
          });
          });

          setMessages(objetosSeparadosPorData);
          setAllMessages(allMessages);

          setTimeout(() => {
            setMessagesLoaded(true);
          }, 1000);
      });
  
      return () => {
        getMessages();
      };
    }, 100);

    setShowUserDetails(false);
    setShowReply(false);
    setMessageReply(null);

  }, [ chatId ]);
  
    // Função para converter timestamp em uma string de data legível
    const timestampToDate = (timestamp) => {
      const data = new Date(timestamp);
      const ano = data.getFullYear();
      const mes = ("0" + (data.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda se o mês for menor que 10
      const dia = ("0" + data.getDate()).slice(-2); // Adiciona um zero à esquerda se o dia for menor que 10
      
      return `${ano}/${mes}/${dia}`;
    };

  function getDayOfWeek(timestamp) {
    const date = new Date(timestamp);
    const dayOfWeek = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const difference = today.getTime() - date.getTime();
    const differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    if (differenceDays === 0) {
      return 'Hoje';
    } else if (differenceDays === 1) {
      return 'Ontem';
    } else {
      const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
      return daysOfWeek[dayOfWeek];
    }
  }

  useEffect(() => {
    if (messagesLoaded && refMessages?.current.scrollHeight > refMessages?.current.offsetHeight) {
      refMessages.current.scrollTop = refMessages.current.scrollHeight - refMessages.current.offsetHeight;
    }
  }, [ messagesLoaded ]);

  function defineSendFile(type) {
    setFileType(undefined);
    setSendFile(false);  
    
    setTimeout(() => {
      setSendFile(true);
      setFileType(type);
    }, 100);
  };

  return (
    <C.Container ref={refBody} showUserDetails={showUserDetails}>

      {isOpenPopUpSendArchives &&
        <ModalArchives setIsOpenPopUpSendArchives={setIsOpenPopUpSendArchives} defineSendFile={defineSendFile}/>
      }
      
      <C.ScrollMessages ref={refMessages} showUserDetails={showUserDetails}>
        {!messages && messagesLoaded && <Loading/>}
        {messages && Object.keys(messages).map((data, key_group) => (
          <div key={key_group}>
            <h2 className="date">{getDayOfWeek(data)}</h2>
            <ul>
              {messages[data].map((message, index) => {
                return (
                  <Message
                    key={index}
                    setMessageReply={setMessageReply}
                    messageReply={messageReply}
                    setShowReply={setShowReply}
                    messageInfo={messageInfo}
                    setMessageInfo={setMessageInfo}
                    canDelete={user?.email == message?.user}
                    userLoggedIn={user}
                    showOptions={showOptions}
                    setShowOptions={setShowOptions}
                    chatId={chatId}
                    user={message?.user}
                    userInfo={userInfo}
                    message={message}
                    message_reply={allMessages.find(objeto => objeto.id == message.reply_message)}
                    message_index={index}
                    message_group_index={key_group}
                    setShowPopUpArchives={setShowPopUpArchives}
                    setArchive={setArchive}
                    setArchives={setArchives}
                  />
                )
                })
              }
            </ul>
          </div>
        ))}
        {showReply &&
          <C.ContainerReply>
            <Reply setShowReply={setShowReply} message={messageReply} setMessageReply={setMessageReply}/>
          </C.ContainerReply>
        }
        {/*(showButtonScrollToBottom && refMessages) && <C.ButtonToBottom onClick={()=>scrollToBottom()}><AiOutlineArrowDown/></C.ButtonToBottom>*/}
      </C.ScrollMessages>
      {showUserDetails &&
        <C.Scroll showUserDetails={showUserDetails}>
          <User
            chatId={chatId}
            userInfo={userInfo}
            showUserDetails={showUserDetails}
            setShowUserDetails={setShowUserDetails}
            setShowPopUpArchives={setShowPopUpArchives}
            setArchive={setArchive}
            setArchives={setArchives}
          />
        </C.Scroll>
      }
    </C.Container>
  );
};

export default Body;
