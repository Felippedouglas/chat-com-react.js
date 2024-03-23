import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 60px;
  overflow: hidden;
  min-height: 90vh;
  width: 100%;
`;

export const ButtonToBottom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: #252525;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #ccc;
  transition: all .3s ease;

  &:hover {
    background: #303030;
  }
`
export const ScrollMessages = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
  height: 100%;
  width: ${props => props.showUserDetails ? '75%' : '100%'};
  max-width: ${props => props.showUserDetails ? '75%' : '100%'};
  
  &::-webkit-scrollbar{
    width: 7px;
  }
  
  &::-webkit-scrollbar-track{
    background-color: #101010;
  }
  
  &::-webkit-scrollbar-thumb{
    background-color: #606060;
  }
  
  &::-webkit-scrollbar-thumb:hover{
    background-color: #505050;
  }

  .date {
    position: sticky;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    width: max-content;
    color: #ccc;
    font-size: .8rem;
    background: #303030;
    padding: 7px 10px;
    margin: 10px 0 10px 0;
    z-index: 1;
  }

  @media (max-width: 1000px) {
    display: ${props => props.showUserDetails ? 'none' : 'block' };
  }
`

export const Scroll = styled.div`

  overflow-y: auto;
  height: 100%;
  background-color: #252525;
  min-width: 300px;
  width: 40%;

  &::-webkit-scrollbar{
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #202020;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #606060;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #505050;
  }

  @media (max-width: 1000px) {
    width: ${props => props.showUserDetails ? '100%' : '0' };
  }
`

export const ContainerReply = styled.div`
  position: sticky;
  bottom: -5px;
  left: 0;
  background-color: #252525;
  color: #fff;
  padding: 10px 20px 10px 30px;
  z-index: 2;

  &::before {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50px;
    content: '';
    height: 70%;
    width: 5px;
    background: #1085f7;
  }
`