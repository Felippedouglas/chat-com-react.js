import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;

    p {
        font-weight: 600;
        font-size: .95rem;
    }

    div {
        display: flex;
        align-items: center;
    }

    img {
        height: 50px;
        height: 50px;
        object-fit: cover;
        margin: 0 10px 0 20px;
    }

    .description {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: .85rem;
        color: #ccc;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .description svg {
        margin-right: 5px;
    }
`

export const Close = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: #303030;

    &:hover {
        background: #404040;
    }

    &:active {
        background: #505050;
    }

    svg {
        color: #fff;
        width: 20px;
        height: 20px;
    }
`