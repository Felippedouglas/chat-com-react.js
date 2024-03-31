import styled from "styled-components";

export const Container = styled.div`
  transition: all .3s ease;
  margin: 0 5px;
  border-radius: 5px;

  &:focus {
    background: #f00 !important;
    padding: 100px 0;
  }
`;

export const Line = styled.div`
  padding: 5px 5px 4px 5px;
  border-radius: 5px;
  display: flex;
  background: ${props => props.active ? '#00d8ff0d' : 'unset'};
  transition: all .3s ease;

  &.me {
    > div:first-child {
      background-color: #10bcf7a1;
      color: #fff;
    }
    justify-content: right;
  }

  &:hover .options {
    opacity: 1 !important;
  }
`;

export const Content = styled.div`
  position: relative;
  background-color: #252525;
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 50%;
  min-height: min-content;
  overflow: hidden;
  transition: all .3s ease;

  &.content-me {
    align-items: start;
  }

  @media (max-width: 1000px) {
    max-width: 60%;
  }

  @media (max-width: 800px) {
    max-width: 50%;
  }

  @media (max-width: 600px) {
    max-width: 70%;
  }

  @media (max-width: 450px) {
    max-width: 75%;
  }

  @media (max-width: 400px) {
    max-width: 80%;
  }
`;

export const Message = styled.span`

  font-size: 14px;
  max-width: 100%;
  flex-flow: wrap;
  font-weight: 600;
  align-items: start;
  word-wrap: break-word;
  overflow-wrap: break-word;
  a {
    color: #fff;
    transition: all .3s ease;
    padding-bottom: 10px;
  }

  a:hover {
    color: #ddd;
  }

  .redirect-to-message-reply {
    text-decoration: none;
  }

`;

export const MessageDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 11px;
  color: #fff !important;
  font-weight: 600;
  text-align: right;
  max-width: max-content;
  border-radius: 50px;

  &.other {
    color: #ccc;
    left: 15px;
  }
  
  .checkVisualized {
    font-size: 1.2rem;
    color: #bbb;
    margin: 5px 0 0 2px ;
  }

  .visualized {
    color: #fff;
  }
`;

export const Options = styled.div`
  position: relative;
  font-size: 1rem;
  margin: auto 5px;
  opacity: ${props => props.isActive ? '1' : '0'};
  transition: all .3s ease;

  &.me {
    order: -1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
  
  .bt-open {
    display: flex;
    align-items: center;
    justify-content: center;
    background: unset;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: #fff;
    margin: 5px;
    cursor: pointer;
    transition: all .3s ease;
    border: none;
  }

  .bt-open:hover {
    background: #303030;
  }

`;