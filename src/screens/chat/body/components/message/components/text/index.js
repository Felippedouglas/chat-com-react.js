import * as C from './styles.js';

export default function Text( { children, message } ) {
    
    return(
        <C.Container message={message}>
            {children}
        </C.Container>
    )
}