import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    top: 0;
    right: 0;
    min-height: 100vh;
    max-width: 100%;
    width: 100%;
    background: #202020;
    color: #fff;
    padding: 15px;
    z-index: 2;

    &::-webkit-scrollbar {
        width: 100px !important;
        background: #f00 !important;
    }

    @media (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        height: 100%;
    }
`;

export const Close = styled.button`
    position: sticky;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #303030;
    font-size: 2rem;
    border: none;
    height: 35px;
    width: 35px;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease;
    
    &:hover {
        background: #404040;
    }
    
    svg {
        width: 25px;
        color: #fff;
    }
`;

export const Name = styled.h2`
    margin: 10px 0 5px 0;
`;

export const Email = styled.h3`
    display: flex;
    align-items: center;
    font-size: .9rem;

    svg {
        margin-right: 5px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

export const Avatar = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .3s ease;
    border: none;
    background: unset;
    cursor: pointer;
    border-radius: 5px;
    
    &:hover {
        opacity: .7;
    }
    
    img {
        border-radius: 5px;
    }

    svg {
        color: #fff;
        width: 70px;
        height: 70px;
        background: rgb(16, 133, 247);
        padding: 10px;
        border-radius: 50px;
    }
`;

export const FullImage = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #20202099;
    width: 100%;
    height: 100%;
    z-index: 2;
    
    img {
        height: 80%;
        border-radius: 5px;
    }
`;