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
  padding: ${props => props.typeImage ? '0' : '3px'};
  max-width: 50%;
  min-height: min-content;
  overflow: hidden;
  transition: all .3s ease;

  &.content-me {
    align-items: start;
  }
  
  .checkVisualized {
    font-size: 1.2rem;
    color: #bbb;
    margin-left: 5px;
  }

  .visualized {
    color: #fff;
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
  margin: ${props => props.typeImage ? '3px 3px 0 3px' : '5px'};

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

  .img-message {
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    min-height: 200px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease;
  }
  
  .img-message:hover {
    opacity: .8;
  }

`;

export const MessageDeleted = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: .9rem;
  font-weight: 600;
  max-width: 100%;
  padding: 10px 0 10px 10px;
  margin: 5px 10px 5px 5px;
`;

export const SpanMessageDeleted = styled.span`
  font-style: italic;
  font-weight: 500;
  max-width: 100%;
  flex-flow: wrap;
  margin: 0 10px 0 5px;
  opacity: .8;
`;

export const MessageDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 11px;
  color: #fff !important;
  font-weight: 600;
  text-align: right;
  height: 15px;
  max-width: max-content;
  margin: 0 10px 5px 5px;
  position: ${props => props.typeImage ? 'absolute' : 'initial'};
  bottom: ${props => props.typeImage ? '10px' : '100px'};
  padding: ${props => props.typeImage ? '10px 15px' : '0'};
  border-radius: 50px;
  background: ${props => props.typeImage ? '#101010a1' : 'unset'};

  &.other {
    color: #ccc;
    left: 15px;
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