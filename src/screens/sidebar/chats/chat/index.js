import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";
import { BsCheckAll, BsCameraFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import ConvertDate from "../../../../components/convert-date";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const Chat = ({ id, users, user, setUserChat, active, arquived, arquivedEmail }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const email = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      email: email,
      name: email.split("@")[0],
      photoURL: Avatar?.photoURL,
      lastLogin: getUserItem?.docs?.[0]?.data().lastLogin
    };

    setUserChat(userChat);
  };
  
  const [ message ] = useCollection(
    db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("date", "desc")
      .limit(1)
  );

  function sanitizeMessage(message) {
    const sanitizedMessage = message.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1");
    return sanitizedMessage;
  }

  return (
    <>
      {((!arquived && arquivedEmail !== email) || (arquived && arquivedEmail !== email) ) &&
        <C.Container onClick={handleNewChat} className={active}>
          <C.Header>
            {Avatar ? <C.Avatar src={Avatar?.photoURL} loading="lazy" /> : <MdPerson className="alter-avatar" />}
            {(user && message && (message?.docs[0]?.data().user !== user?.email) && (!message?.docs[0]?.data()?.visualized)) &&
              <C.NewMessage>1</C.NewMessage>
            }
          </C.Header>
          <C.Body>
            <C.HeaderBody>
              <C.Name>{(Avatar?.name.length > 15) ? `${(Avatar?.slice(0, 15))}...` : Avatar?.name.length < 15 ? Avatar?.name : email.split("@")[0].length > 15 ? `${(email.split("@")[0].slice(0, 15))}...` : (email.split("@")[0])}</C.Name>
              {message?.docs[0]?.data()?.date &&
                <ConvertDate elapsedTime={message?.docs[0]?.data()?.date?.seconds}/>
              }
            </C.HeaderBody>
            {(message?.docs[0]?.data()) &&
              <C.FooterBody>
                <C.ContainerMessage>
                  <C.Message>{(message?.docs[0]?.data()?.type == 'image' && !message?.docs[0]?.data()?.deleted) && <span className="svg-camera"><BsCameraFill/></span>} {message?.docs[0]?.data()?.deleted ? <C.MessageDeleted><FaTrashAlt></FaTrashAlt> <C.SpanMessageDeleted></C.SpanMessageDeleted>Mensagem Excluida</C.MessageDeleted> : message?.docs[0]?.data()?.type == 'text' ? <p dangerouslySetInnerHTML={{ __html: sanitizeMessage(message?.docs[0]?.data()?.message) }}></p> : 'Foto'}</C.Message>
                </C.ContainerMessage>
                {(message?.docs[0]?.data().user === user.email && !message?.docs[0]?.data()?.deleted) &&
                  <>
                    {message?.docs[0]?.data()?.visualized ?
                      <C.Visualized><BsCheckAll className="visualized"></BsCheckAll></C.Visualized>
                      : <C.Visualized><BsCheckAll></BsCheckAll></C.Visualized>
                    }
                  </>
                }
              </C.FooterBody>
            }
          </C.Body>
        </C.Container>
      }
    </>
  );
};

export default Chat;
