import { FaImage, FaTrashAlt } from 'react-icons/fa';
import * as C from './styles.js';

export const MessageReply = ({ message, userInfo, typeMessage })=> {
    return(
        <C.Container type={typeMessage}>
            {message?.deleted ?
                <section>
                    <h3>{message?.user != userInfo.email ? 'Você' : userInfo.name.split(" ")[0]}:</h3>
                    <C.MessageDeleted>
                        <FaTrashAlt></FaTrashAlt> <C.SpanMessageDeleted>Mensagem excluída</C.SpanMessageDeleted>
                    </C.MessageDeleted>
                </section>
            :   <>
                    <section>
                        <h3>{message?.user != userInfo.email ? 'Você' : userInfo.name.split(" ")[0]}:</h3>
                        {message?.type == 'text' &&
                            <span>{message?.message}</span>
                        }
                        {message.type == 'image' &&
                            <span><FaImage /> Imagem</span>
                        }
                    </section>
                    <section className='midia'>
                        {message?.type == 'image' &&
                            <img src={message?.file?.src} width={message?.file?.width} height={message?.file?.height} alt={message?.file.name} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="./error.jpg";}}/>
                        }
                    </section>
                </>
            }
        </C.Container>
    )
}