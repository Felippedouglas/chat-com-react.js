import styled from "styled-components";

export const Container = styled.div `
    margin: 4px 4px 1px 4px;
    `
export const Content = styled.div `

    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        min-width: 200px;
        max-width: 400px;
        min-height: 200px;
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s ease;
    }
    
    img:hover {
        opacity: .8;
    }

`

export const Date = styled.div `
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 0 3px 0 10px;
    border-radius: 50px;
    background: #18181899;
    border: 1px solid #606060;
  
    .checkVisualized {
        font-size: 1.2rem;
        color: #bbb;
        margin: 2px 0 0 2px;
    }

    .visualized {
        color: #fff;
    }
`