import { MdDownload } from "react-icons/md";
import { downloadArchive } from "../../screens/chat/body/components/message/options/download";
import * as C from "./styles";
import { IoClose } from "react-icons/io5";

const ArchivesPopUp = ({ user, archive, archives, setShowPopUpArchives })=> {

    console.log(archive)

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
                    {!archive.download_block &&
                        <div>
                            <button
                                onClick={()=>downloadArchive({
                                    src: archive?.src,
                                    name: archive?.name,
                                    extension: archive.extension
                                })}
                            >
                                <MdDownload/>
                            </button>
                        </div>
                    }
                </C.Header>
                {(archive?.type == 'image') &&
                    <img src={archive?.src} alt={archive?.name} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                }
                {(archive?.type == 'audio') &&
                    <audio src={archive?.src} controls controlsList="nodownload"></audio>
                }
                {archive?.type == 'video' &&
                    <video src={archive?.src} alt={archive?.name} autoPlay controls/>
                }
            </C.Content>
        </C.Container>
    )
}

export default ArchivesPopUp;