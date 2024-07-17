import * as C from './styles.js';

const Archive = ( { document, showAll, index, openArchive } ) => {
    return(
        <C.Container>
            <C.Button onClick={()=>document.type == 'document' ? window.open(document.file.src, '_blank') : openArchive(document.file)}>
                <C.Image showAll={showAll} src={`./${document.type}.png`} key={index} alt={`Image ${document.id}`} height='100px'/>
                <span>{document.type}</span>
                {document.type == 'document' &&
                    <p className='name'>{document.file.name}</p>
                }
            </C.Button>
        </C.Container>
    )
};

export default Archive;