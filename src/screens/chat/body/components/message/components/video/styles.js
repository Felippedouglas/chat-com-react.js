import styled from "styled-components";

export const Container = styled.div `
    margin: 4px 4px 2px 4px;
    overflow: hidden;
`
export const Content = styled.div `

    position: relative;

    .control-play {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        position: absolute;
        width: 100%;
        height: 99%;
        border-radius: 5px;
        top: 0;
        left: 0;
        background: #18181899;
        transition: all .3s ease;
    }

    .play {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        background: #101010;
        color: #fff;
        border-radius: 50px;
        cursor: pointer;
        border: 1px solid #505050;
        transition: all .3s ease;
    }

    .play:hover {
        background: #303030;
    }

    .play svg {
        height: 25px;
        width: 25px;
    }

    .controls {
        display: flex;
        align-items: end;
        justify-content: space-between;
        padding: 10px;
        position: absolute;
        width: 100%;
        height: 99%;
        border-radius: 5px;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all .3s ease;
    }

    .controls:hover {
        opacity: 1;
        background: #18181899;
    }

    .controls button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        background: #101010;
        color: #fff;
        border-radius: 50px;
        cursor: pointer;
        border: 1px solid #505050;
        transition: all .3s ease;
    }

    .controls button:hover {
        background: #303030;
    }

    .controls button svg {
        height: 20px;
        width: 20px;
    }

    video {
        width: 100%;
        min-width: 200px;
        max-width: 400px;
        min-height: 200px;
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }

`

export const Date = styled.div `
    position: absolute;
    bottom: 10px;
    right: 15px;
`