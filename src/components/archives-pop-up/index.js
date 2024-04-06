import { MdDownload } from "react-icons/md";
import { downloadArchive } from "../../screens/chat/body/components/message/options/download";
import * as C from "./styles";
import { IoClose } from "react-icons/io5";

const ArchivesPopUp = ({ user, archive, archives, setShowPopUpArchives })=> {

    return (
        <C.Container>
            <C.Content>
                <C.Header>
                    <div>
                        <button className="close" onClick={()=>setShowPopUpArchives(false)}><IoClose/></button>
                        {user &&
                            <section className="user">
                                <img src={user?.photoURL} alt={user?.name} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                                <span className="name">{user?.name}</span>
                            </section>
                        }
                    </div>
                    <div>
                        <button onClick={()=>downloadArchive(archive?.src)}><MdDownload/></button>
                    </div>
                </C.Header>
                {(archive?.type == 'image') &&
                    <img src={archive?.src} alt={archive?.name} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                }
                {archive?.type == 'video' &&
                    <video src={archive?.src} alt={archive?.name} autoPlay controls onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                }
            </C.Content>
        </C.Container>
    )
}

export default ArchivesPopUp;