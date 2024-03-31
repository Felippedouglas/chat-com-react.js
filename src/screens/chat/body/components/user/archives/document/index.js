import * as C from './styles.js';

const Archive = ( { document, showAll, index } ) => {
    return(
        <C.Container>
            <C.Button onClick={()=>window.open(document.file.src, '_blank')}>
                <C.Image showAll={showAll} src={`./${document.type}.png`} key={index} alt={`Image ${document.id}`} height='100px'/>
                {document.type == 'document' &&
                    <p className='name'>{document.file.name}</p>
                }
            </C.Button>
        </C.Container>
    )
};

export default Archive;