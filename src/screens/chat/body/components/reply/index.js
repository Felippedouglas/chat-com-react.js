import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import * as C from './styles.js';

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
                        <span>{message?.message}</span>
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