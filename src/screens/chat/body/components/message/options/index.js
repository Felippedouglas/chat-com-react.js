import { copyMessage } from "./copy";
import { deleteMessage } from "./delete";
import { downloadMessage } from "./download";

import { IoIosCopy, IoMdTrash } from "react-icons/io";
import { MdDownload } from "react-icons/md";

import * as C from './styles.js';
import { useEffect, useRef } from "react";
import { BsFillReplyFill } from "react-icons/bs";

export default function Options ({ chatId, message, canDelete, copied, setCopied, setShowOptions, setMessageInfo, setShowReply, setMessageReply, defineMessageReply, message_group_index, message_index }) {
    
    const Container = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (Container.current && !Container.current.contains(event.target)) {
            handleShowOptions()
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleShowOptions = ()=> {
        setShowOptions(false);
        setMessageInfo(null);
    }

    return (
        <C.Container ref={Container} containerOnTop={message_group_index >= 1 || ((message_index > 1) && (message_group_index == 0))} by_other_user={!canDelete}>
            <button onClick={()=>defineMessageReply(message)}><BsFillReplyFill></BsFillReplyFill> Responder</button>
            {message?.type != 'text' &&
                <button onClick={()=>downloadMessage(message.file)}><MdDownload></MdDownload> Baixar</button>
            }
            {canDelete &&
                <button onClick={()=>deleteMessage(message, chatId, setShowOptions, setShowReply, setMessageReply)}><IoMdTrash></IoMdTrash> Excluir</button>
            }
            {message?.type == 'text' &&
                <button onClick={()=>copyMessage(message?.message, setCopied)}><IoIosCopy ></IoIosCopy> {copied ? 'Copiado!' : 'Copiar'}</button>
            }
        </C.Container>
    )
};