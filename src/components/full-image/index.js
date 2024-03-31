import * as C from "./styles";
import { IoClose } from "react-icons/io5";

const FullImage = ({ user, image, typeViewer, imageName, setShowFullImage })=> {

    return (
        <C.Container>
            <C.Content>
                <C.Header>
                    <button className="close" onClick={()=>setShowFullImage(false)}><IoClose/></button>
                    {user &&
                        <section className="user">
                            <img src={user?.photoURL} alt={user?.name} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                            <span className="name">{user?.name}</span>
                        </section>
                    }
                </C.Header>
                {(typeViewer == 'image' || !typeViewer) &&
                    <img src={String(image)} alt={String(imageName)} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                }
                {typeViewer == 'video' &&
                    <video src={String(image)} alt={String(imageName)} autoPlay controls onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
                }
            </C.Content>
        </C.Container>
    )
}

export default FullImage;