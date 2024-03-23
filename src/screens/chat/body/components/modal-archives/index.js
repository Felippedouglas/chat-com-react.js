import { useEffect, useRef } from "react";
import * as C from './styles.js';
import { MdInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

export default function ModalArchives({setIsOpenPopUpSendArchives, defineSendFile }) {

    const Container = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (Container.current && !Container.current.contains(event.target)) {
            setIsOpenPopUpSendArchives(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <C.Container ref={Container}>
            <button onClick={()=>defineSendFile()}><MdInsertPhoto /> Imagem</button>
            <button onClick={()=>defineSendFile()} disabled><FaVideo /> Video</button>
            <button onClick={()=>defineSendFile()} disabled><IoDocument /> Documento</button>
        </C.Container>
    )
}