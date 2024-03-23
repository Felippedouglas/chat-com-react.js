import * as C from "./styles";

const FullImage = ({ image, imageName, setShowFullImage })=> {

    return (
        <C.Container>
            <C.FullImage onClick={()=>setShowFullImage(false)}>
                <img src={String(image)} alt={String(imageName)} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
            </C.FullImage>
        </C.Container>
    )
}

export default FullImage;