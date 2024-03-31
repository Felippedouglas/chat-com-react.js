import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 10px;
    margin: 20px 2px 0 2px;
    `

export const Content = styled.div `

    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    min-width: 250px;
    max-width: 100%;
    margin-bottom: 10px;
    
    svg {
        width: 40px;
        height: 40px;
    }

    main {
        display: flex;
    }
    
    .name {
        font-size: 1rem;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    footer {
        display: flex;
    }

    footer button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: #fff;
        background: #50505099;
        padding: 10px;
        width: 100%;
        font-size: .9rem;
        margin-right: 5px;
        cursor: pointer;
        font-weight: 600;
        margin-top: 20px;
        border-radius: 5px;
        transition: all .3s ease;
    }

    footer button:hover {
        background: #303030;
    }

    footer button svg {
        height: 25px;
        width: 25px;
        margin-right: 5px;
    }

    footer button:last-child {
        margin-right: 0;
    }
`