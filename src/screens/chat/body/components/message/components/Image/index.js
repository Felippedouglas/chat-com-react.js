import * as C from './styles.js';

export default function Image( {children, image, openArchivePopUp } ) {

  return(
    <C.Container>
      <C.Content>
      <img
        className="img-message"
        height={image?.height}
        width={image?.width}
        onClick={()=>openArchivePopUp(image)}
        src={image?.src} alt="image"loading="lazy"
        onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src='./error.jpg';}}/>
      </C.Content>
      <C.Date>
        {children}
      </C.Date>
    </C.Container>
  )
}