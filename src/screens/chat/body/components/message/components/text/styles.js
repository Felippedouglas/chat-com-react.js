import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: ${props => props.message.length < 25 ? 'row' : 'column'};
    align-items: ${props => props.message.length < 25 ? 'center' : 'end'};
    justify-content: ${props => props.message.length < 25 ? 'space-between' : 'unset'};
    min-width: 100px;
    margin: 10px 5px 10px 5px;
    padding: 0 10px;

    .date-text {
        margin-left: 15px;
    }

    .message-text {
        max-width: max-content;
        overflow: hidden;
    }
`