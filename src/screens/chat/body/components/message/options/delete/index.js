import { deleteObject, getStorage, ref } from "firebase/storage";
import { app, db } from "../../../../../../../services/firebase";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export const deleteMessage = async ( message, chat_id, setShowOptions, setShowReply, setMessageReply  ) => {
    
    if (message?.type == 'text') {
    await updateDoc(doc(db, `/chats/${chat_id}/messages/${message?.id}`), {
        deleted: true,
        message: '',
        messageDeleted: message?.message,
        dataDeleted: serverTimestamp(),
    }).then(()=>{
        setShowOptions(null);
        setShowReply(false);
        setMessageReply(null);
    })
} else {
    await updateDoc(doc(db, `/chats/${chat_id}/messages/${message?.id}`), {
        deleted: true,
        src: '',
        file: '',
        dataDeleted: serverTimestamp(),
    }).then(()=>{
        deleteFile(message?.file?.filePath);
        setShowReply(false);
        setMessageReply(null);
        setShowOptions(null);
    })
    }
};

const storage = getStorage(app);
const deleteFile = async (filePath) => {
    const storageRef = ref(storage);
    const fileRef = ref(storageRef, filePath);

    try {
        await deleteObject(fileRef);
    } catch (error) {
    };
};