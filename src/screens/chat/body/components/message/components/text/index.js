import * as C from './styles.js';

export default function Text( { children, message } ) {
console.log(message.length)
    return(
        <C.Container message={message}>
            {children}
        </C.Container>
    )
}