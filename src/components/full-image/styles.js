import styled from "styled-components";

export const Container = styled.div``

export const FullImage = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #20202099;
    border: none;
    width: 100%;
    height: 100%;
    z-index: 3;
    
    img {
        width: 85%;
        max-height: 85%;
        object-fit: contain;
        border-radius: 5px;
    }
`;