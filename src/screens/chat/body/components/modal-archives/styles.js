import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  min-width: 200px;
  max-width: 200px;
  border-radius: 5px;
  padding: 5px;
  left: 5px;
  bottom: 65px;
  background: #505050;
  color: #fff;
  z-index: 3;

  button {
    display: flex;
    align-items: center;
    background: unset;
    padding: 15px 10px;
    color: #fff;
    font-size: .8rem;
    font-weight: 600;
    width: 100%;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: all .3s ease;
  }

  button svg {
    height: 20px;
    margin-right: 5px;
  }

  button:hover {
    background: #707070;
  }

  button:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;
