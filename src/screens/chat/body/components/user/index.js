import { useState } from "react";
import * as C from "./styles";
import { RiCloseFill } from 'react-icons/ri';
import { MdEmail, MdPerson } from 'react-icons/md';
import FullImage from '../../../../../components/full-image';
import Loading from "../../../../../components/load";

const UserDetails = ({ setShowUserDetails, userInfo })=> {

    const [ showFullImage, setShowFullImage ] = useState(false);

    return (
        <C.Container>
            {!userInfo ?
                <Loading/>
            :
                <>
                    <C.Close onClick={()=>setShowUserDetails(false)}><RiCloseFill></RiCloseFill></C.Close>
                    <C.Body>
                        {userInfo.photoURL ?
                            <C.Avatar onClick={()=>setShowFullImage(true)}>
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
            }
            {showFullImage &&
                <FullImage setShowFullImage={setShowFullImage} image={String(userInfo.photoURL).replace("s96", "s1000")} imageName={'user'}/>
            }
        </C.Container>
    )
}

export default UserDetails