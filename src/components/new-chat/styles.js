import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #353535;
    border-radius: 5px;
    margin: -5px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 1.5rem;
        background: none;
        color: #fff;
        border: none;
        min-height: 35px;
        max-height: 35px;
        min-width: 35px;
        max-width: 35px;
        cursor: pointer;
        transition: all .3s ease;
    }

    button:hover {
        opacity: .7;
    }
`;

export const Back = styled.button`
    svg {
        margin-right: 5px;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    margin: 0 5px;
    outline: unset;
    border: none;
`;

export const EmailInput = styled.input`
    padding: 12px 10px;
    outline: none;
    border: none;
    background: #353535;
    color: #fff;
    border-radius: 5px;
    outline: none;
    width: 100%;

    &:hover {
        background: #383838;
    }

    &::placeholder {
        color: #ccc;
    }

    &:focus::placeholder {
        color: #fff;
    }
`;

export const Send = styled.button`
    svg {
        margin-left: 5px;
    }
`