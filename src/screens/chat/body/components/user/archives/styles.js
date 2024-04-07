import styled from "styled-components";

export const Container = styled.div `

    .header {
        display: flex;
        justify-content: space-between;
    }

    .header section {
        display: flex;
        align-items: center;
    }

    .header button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background: #404040;
        margin: 0 5px;
        border: none;        
    }

    .header button svg {
        width: 15px;
        height: 15px;
        color: #fff;
    }
`

export const Content = styled.div `
    position: relative;
    display: ${props => props.showAll ? 'grid' : 'flex'};
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    overflow: ${props => props.showAll ? 'auto' : 'hidden'};
    
    @media (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media (max-width: 500px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 300px) {
        grid-template-columns: repeat(2, 1fr);
    }

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 10px;
        height: 100%;
        background: ${props => props.showAll ? 'unset' : 'linear-gradient(to left, #222222, transparent)'};
    }
`

export const Button = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 5px;
`

export const Image = styled.img `
    border-radius: 5px;
    width: ${props => props.showAll ? '100%' : '80px'};
    height: ${props => props.showAll ? 'auto' : '80px'};
    aspect-ratio: 9/9;
    object-fit: cover;
    border: 1px solid #404040;
    transition: all .3s ease;
    background: #10bcf7a1;

    &:hover {
        padding: 2px;
    }
`