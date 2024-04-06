import styled from "styled-components";

export const Container = styled.div``

export const Close = styled.button``

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000cc;
    width: 100%;
    height: 100%;
    padding: 20px;
    z-index: 9;
    
    img, video {
        max-width: 85%;
        max-height: 85%;
        object-fit: contain;
        border-radius: 5px;
        margin: auto;
    }
`;

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div {
        display: flex;
        align-items: center;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #252525;
        border-radius: 50px;
        cursor: pointer;
        border: none;
        transition: all .3s ease;
    }

    button:hover {
        background: #505050;
    }

    button svg {
        color: #fff;
        width: 25px;
        height: 25px;
    }

    .user {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .user img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        margin-right: 10px;
    }

    .user .name {
        font-size: .9rem;
        color: #fff;
        font-weight: 600;
    }
`