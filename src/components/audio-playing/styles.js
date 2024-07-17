import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 4px 4px 1px 4px;
`
export const Content = styled.div `
    position: relative;
    overflow: hidden;
    min-width: 250px;

    .player {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        padding: 20px 5px;
        border-radius: 5px;
        min-width: 100%;
    }

    .div-image {
        height: 35px;
        border-radius: 50px;
        margin-right: 10px;
    }
    
    .div-image svg {
        height: 40px;
        width: 40px;
        padding: 8px;
        background: #181818;
        color: #fff;
        border-radius: 50px;
    }

    .controls {
        margin-right: 3px;
    }

    .controls button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: unset;
        font-size: 1.2rem;
        border-radius: 50px;
        height: 30px;
        width: 30px;
        color: #fff;
        cursor: pointer;
        transition: all .3s ease;
    }

    .controls button:hover {
        background: #18181850;
    }

    .time {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2px;
    }
    
    .time span {
        font-size: .9rem;
        color: #fff;
    }

    .footer {
        width: 100%;
    }

    .progress-bar {
        height: 8px;
        background-color: #ddd;
        cursor: pointer;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    .progress {
        height: 8px;
        background-color: #333;
        border-radius: 5px;
    }

`