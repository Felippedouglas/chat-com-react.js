import styled from "styled-components";

export const Container = styled.div `

    display: flex;
    position: sticky;
    top: 0;
    flex-direction: column;
    padding: 10px 20px 5px 20px;
    background: #202020;
    overflow: hidden;
    border-bottom: 2px solid #000;
    z-index: 1;

    .header {
        display: flex;
        justify-content: space-between;
    }

    .header .name {
        color: #fff;
        font-weight: 600;
        font-size: .8rem;
        margin-left: 5px;
    }

    .header button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        background: none;
        border: none;
        height: 25px;
        width: 25px;
        cursor: pointer;
        border-radius: 50%;
        transition: all .3s ease;
    }
    
    .header button:hover {
        background: #505050;
    }
    
    .header button svg {
        width: 25px;
        color: #fff;
    }
`

export const Content = styled.div `

    position: relative;
    width: 100%;
    overflow: hidden;

    .player {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        padding: 5px 5px 15px 5px;
        border-radius: 5px;
        width: 100%;
    }

    .div-image {
        height: 35px;
        border-radius: 50px;
    }
    
    .div-image img {
        height: 40px;
        width: 40px;
        padding: 2px;
        background: #1e90ff;
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
        margin: 5px 0;
        border-radius: 5px;
    }

    .progress {
        height: 8px;
        background-color: #333;
        border-radius: 5px;
    }

`