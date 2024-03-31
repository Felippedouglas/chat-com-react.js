import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import * as C from './styles.js';
import { IoIosDocument } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";

export default function Reply( { message, setShowReply, setMessageReply } ) {

    // caso 'message?.deleted' for verdadeiro, usar um useeffect para fechar esta seção

    useEffect(()=>{

        if (message?.deleted) {
            closeReply();
        }

    }, [ message ]);

    const closeReply = ()=> {
        setMessageReply(null);
        setShowReply(false);
    }

    return(
        <C.Container>
            <div>
                <section>
                    <p>Responder</p>
                    {message?.type == 'text' &&
                        <span className="description message-text">{message?.message}</span>
                    }
                    {message?.type == 'document' &&
                        <span className="description"><IoIosDocument /> {message?.file.name}</span>
                    }
                    {message?.type == 'video' &&
                        <span className="description"><IoMdVideocam /> video</span>
                    }
                </section>
                {message?.type == 'image' &&
                    <section>
                        <img src={message?.file.src} alt={message?.file.name} width={'50px'}/>
                    </section>
                }
            </div>
            <div>
                <C.Close onClick={closeReply}><IoClose/></C.Close>
            </div>
        </C.Container>
    )
}