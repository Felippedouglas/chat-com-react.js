import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../services/firebase";
import * as C from "./styles";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./chat";
import { useEffect } from "react";
import firebase from "firebase/compat/app";
import Loading from "../../../components/load";
import AudioPlaying from "../../../components/audio-playing";

const Chats = ({ setUserChat, userChat }) => {

  const [ chats, setChats ] = useState([]);

  const [user] = useAuthState(auth);
  
  const refChat = db.collection("chats").where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  useEffect(() => {
    if (chatsSnapshot) {
      const sortedChats = chatsSnapshot.docs.sort((a, b) => {
        const timestampA = a.data().updated;
        const timestampB = b.data().updated;
        return timestampA - timestampB;
      });
      setChats(sortedChats.reverse());
    }
  }, [chatsSnapshot]);

  useEffect(() => {
    if (chatsSnapshot && chatsSnapshot.size === 0 && user.email !== 'lippecode@gmail.com') {
      db.collection("chats").add({
        users: [user.email, 'lippecode@gmail.com'],
        updated: firebase.firestore.FieldValue.serverTimestamp(),
      }).then((chatData) => {
        const chatId = chatData.id;
        const messages = [
          {
            messageId: "welcome",
            message: 'Olá! Seja bem-vindo ao Shatt, este é um webapp de mensagens, para testá-lo me envie uma mensagem ou fique à vontade para convidar outras pessoas.',
            user: 'lippecode@gmail.com',
            photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtfi76v_8DfXSYpWe2eE_gi93t85puKUXiMB6agGOA=s200-c',
            date: firebase.firestore.FieldValue.serverTimestamp(),
            type: 'text',
          },
          {
            messageId: "image_message",
            message: 'Além de mensagens, é possivel enviar imagens!',
            user: 'lippecode@gmail.com',
            photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtfi76v_8DfXSYpWe2eE_gi93t85puKUXiMB6agGOA=s200-c',
            date: firebase.firestore.FieldValue.serverTimestamp(),
            type: 'text'
          },
          {
            messageId: "image",
            user: 'lippecode@gmail.com',
            photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtfi76v_8DfXSYpWe2eE_gi93t85puKUXiMB6agGOA=s200-c',
            date: firebase.firestore.FieldValue.serverTimestamp(),
            file: {
              src: 'https://firebasestorage.googleapis.com/v0/b/shatt-5f65d.appspot.com/o/welcome.jpg?alt=media&token=7b2a9c5a-eca0-4883-a09d-d10ad3dd16d5',
              extension: "jpg",
              filePath: "welcome.jpg",
              name: "Welcome",
              type: "image",
              height: 400,
              width: 400,
            },
            type: 'image'
          },
          {
            messageId: "reply_message",
            message: 'Também é possível responder as mensagens enviadas ou recebidas.',
            user: 'lippecode@gmail.com',
            photoURL: 'https://lh3.googleusercontent.com/a/AAcHTtfi76v_8DfXSYpWe2eE_gi93t85puKUXiMB6agGOA=s200-c',
            date: firebase.firestore.FieldValue.serverTimestamp(),
            type: 'text',
            reply_message: 'image'
          },
        ];
  
        // Adicionando cada mensagem pré-definida separadamente
        const promises = messages.map((message) => {
          const messageId = message.messageId;
          delete message.messageId; // Não queremos armazenar o ID da mensagem como parte dos dados da mensagem
          return db.collection("chats").doc(chatId).collection("messages").doc(messageId).set(message);
        });
  
        // Espera por todas as mensagens serem enviadas antes de concluir
        Promise.all(promises).then(() => {
          console.log("Todas as mensagens pré-definidas foram enviadas com sucesso.");
        }).catch((error) => {
          console.error("Erro ao enviar mensagens pré-definidas:", error);
        });
      });
    }
  }, [chatsSnapshot]);

  return (
    <C.Container>

      {chats &&
        <AudioPlaying />
      }

      {!chats && <Loading/>}
      {(chats && chats.length >= 1) && chats.map((item, index) => (
        <C.Content key={index}>
          <Chat
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
            arquived={item.data().arquived}
            arquivedEmail={item.data().arquivedEmail}
            created={item.created}
          />
          <C.Divider />
        </C.Content>
      ))
    }
    </C.Container>
  );
};

export default Chats;
