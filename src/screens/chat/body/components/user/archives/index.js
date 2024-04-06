import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../../services/firebase";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import * as C from './styles.js';
import Document from "./document/index.js";

export default function Archives({ chatId, openArchive, setScreen, showAll }) {

  const [archives, setArchives] = useState([]);

  useEffect(() => {

    const getArchives = async () => {
      const messagesRef = collection(db, `chats/${chatId}/messages`);
      const q = query(messagesRef, where('type', '!=', 'text'), orderBy("type", "asc"), orderBy("date", "asc"));
      const querySnapshot = await getDocs(q);
      const archivesData = [];
      querySnapshot.forEach((doc) => {
          archivesData.push(doc.data());
      });
      setArchives(archivesData);
  };

      getArchives();
  }, [chatId]);

  const Image = ({ image, index })=>{
    return (
      <C.Button onClick={()=>openArchive(image.file)}>
        <C.Image showAll={showAll} src={image.file.src} key={index} alt={`Image ${index}`} height='100px'/>
      </C.Button>
    )
  }

  const fileRenderer = (message, index ) => {
        
    if (message.file.type === 'image') {
      return <Image image={message} index={index}/>;
    } else if ((message.file.type === 'document') || message.file.type == 'video') {
      return (
        <Document document={message} index={index} showAll={showAll} openArchive={openArchive}/>
    );
  } else {
    return (
      <p key={index}>Unknown file type: {message.file.name}</p>
    );
  }
};

return (
  <C.Container>
    <header className="header">
      <section>
        {showAll &&
          <button onClick={()=>setScreen('')}><FaChevronLeft/></button>
        }
        <h3>Arquivos</h3>
      </section>
      {!showAll &&
        <button onClick={()=>setScreen('archives')}><FaChevronRight/></button>
      }
    </header>
    <C.Content showAll={showAll}>
      {archives.slice(0, showAll ? 10000 : 10).map((message, index) =>
      !message?.deleted && (
        <div key={index}>
          {fileRenderer(message, index)}
        </div>
      ))}
    </C.Content>
  </C.Container>
);


}
