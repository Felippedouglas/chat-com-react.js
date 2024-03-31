import { downloadArchive } from '../../options/download/index.js';
import * as C from './styles.js';
import { IoIosDocument } from "react-icons/io";
import { MdDownload } from "react-icons/md";

export default function Image( {children, image, openFullImage } ) {

  return(
    <C.Container>
      <C.Content>
      <img
        className="img-message"
        height={image?.height}
        width={image?.width}
        onClick={()=>openFullImage(image?.src, 'image')}
        src={image?.src} alt="image"loading="lazy"
        onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
      </C.Content>
      <C.Date>
        {children}
      </C.Date>
    </C.Container>
  )
}