import { useState } from "react";
import * as C from "./styles";
import { RiCloseFill } from 'react-icons/ri';
import { MdEmail, MdPerson } from 'react-icons/md';
import FullImage from '../../../../../components/full-image';
import Loading from "../../../../../components/load";
import Archives from "./archives";

const UserDetails = ({ setShowUserDetails, userInfo, chatId })=> {

    const [ showFullImage, setShowFullImage ] = useState(false);
    const [ archive, setArchive ] = useState();

    const [ screen, setScreen ] = useState('');

    const openArchive = (src) => {
        setShowFullImage(true);
        setArchive(src);
    }

    const Default = ()=> {
        return(
            <>
                <C.Close onClick={()=>setShowUserDetails(false)}><RiCloseFill></RiCloseFill></C.Close>
                <C.Body>
                    {userInfo.photoURL ?
                        <C.Avatar onClick={()=>openArchive(String(userInfo.photoURL).replace("s96", "s1000"))}>
                            <img src={userInfo.photoURL}/>
                        </C.Avatar>
                    :
                        <C.Avatar>
                            <MdPerson />
                        </C.Avatar>
                    }
                    <C.Name>{userInfo?.name ? userInfo?.name : 'Não cadastrado!'}</C.Name>
                    {userInfo?.email &&
                        <C.Email><MdEmail/>{userInfo?.email}</C.Email>
                    }
                </C.Body>
            </>
        )
    }

    return (
        <C.Container>
            {!userInfo ?
                <Loading/>
            :
                <>
                    {screen == '' && <Default/>}
                </>
                
            }
            {(screen == '' || screen == 'archives') && <Archives chatId={chatId} openArchive={openArchive} showAll={screen == 'archives'} setScreen={setScreen}/>}
            {showFullImage &&
                <FullImage setShowFullImage={setShowFullImage} image={archive} imageName={'user'}/>
            }
        </C.Container>
    )
}

export default UserDetails