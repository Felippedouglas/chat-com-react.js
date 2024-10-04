import styled from "styled-components";

export const Container = styled.div `
    position: relative;
    padding: 20px;
    background-color: #202020;
    color: #fff;
    max-height: calc(100% - 65px);
    overflow-y: auto;

    
    &::-webkit-scrollbar{
        width: 7px;
    }

    &::-webkit-scrollbar-track{
        background-color: #202020;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #606060;
    }

    &::-webkit-scrollbar-thumb:hover{
        background-color: #505050;
    }

`

export const Header = styled.header `
    position: sticky;
    top: -20px;
    display: flex;
    align-items: center;
    padding: 15px 0 10px 0;
    background: #202020;
    border-bottom: 1px solid #303030;
    z-index: 9;
`

export const Title = styled.h2 `
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
`

export const Close = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #303030;
    font-size: 2rem;
    border: none;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
    transition: all .3s ease;
    
    &:hover {
        background: #404040;
    }
    
    svg {
        width: 25px;
        color: #fff;
    }
`;

export const User = styled.header `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`

export const Image = styled.img `
    height: 100px;
    width: 100px;
    border-radius: 5px;
`

export const Name = styled.h2 `
    font-size: 1.1rem;
    margin-top: 10px;
    font-weight: 600;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
`

export const Email = styled.h2 `
    font-size: .9rem;
    margin-top: 3px;
    font-weight: 600;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
`

export const Settings = styled.div `

    section {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #505050;
    }

    .title {
        font-size: 1.2rem;
        margin-bottom: 10px;
        color: #fff;
        font-weight: bold;
    }
    
    .option {
        position: relative;
        display: flex;
        justify-content: start;
        width: 100%;
        font-size: 1rem;
        font-weight: 500;
        padding: 15px 10px 15px 15px;
        border-radius: 5px;
        background: unset;
        border: none;
        color: #ccc;
        cursor: not-allowed;
        transition: all .3s ease;

        :hover {
            background: #303030;
            color: #fff;
        }

        :hover::before {
            content: '';
            width: 3px;
            height: 20px;
            position: absolute;
            border-radius: 50px;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            background: #10bcf7a1;
        }
    }

    .option svg {
        margin-right: 10px;
    }
`

export const A = styled.div ``