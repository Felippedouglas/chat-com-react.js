import styled from "styled-components";

export const Container = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5px 10px 0;
    cursor: pointer;
    transition: all .3s ease;
    
    &:hover {
        opacity: .7;
    }
`

export const Button = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 5px;
    
    .name {
        -webkit-line-clamp: 1;
        color: #fff;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        width: ${props => props.showAll ? '100%' : '80px'};
        font-weight: 500;
        font-size: .7rem;
        margin-top: -10px;
    }
`

export const Image = styled.img `
    border-radius: 5px;
    width: ${props => props.showAll ? '100%' : '80px'};
    height: ${props => props.showAll ? 'auto' : '80px'};
    aspect-ratio: 9/9;
    object-fit: cover;
    border: 1px solid #404040;
    transition: all .3s ease;
    background: #505050;
    padding: 20px;
`