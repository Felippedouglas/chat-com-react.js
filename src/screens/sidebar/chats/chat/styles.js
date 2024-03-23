import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  background: unset;
  border: none;
  padding: 15px;
  color: #ccc;
  cursor: pointer;
  
  &:hover {
    background-color: #181818;
  }
  
  &.active {
    background-color: #202020;
    color: #fff;
  }
  
  .alter-avatar {
    width: 40px;
    height: 40px;
    padding: 2px;
    background-color: #ccc;
    color: #000;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  @media (max-width: 800px) {
    min-width: 99%;
    max-width: 99%;
    overflow: hidden;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;

export const NewMessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
  font-size: 1.5rem;
  background: #1E90FF;
  color: #fff;
  border-radius: 50%;
  margin: -3px 5px 0 5px;
  font-size: .7rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: calc(100% - 50px);
`;

export const HeaderBody = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  max-width: max-content;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  font-size: .75rem;
`;

export const FooterBody = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  max-width: 100%;
  margin-top: 5px;
`;
  
export const Details = styled.div`
  display: block;
  width: 100%;
  margin-top: 5px;
`;

export const Visualized = styled.span`
  position: absolute;
  right: 15px;
  padding-left: 20px;
  background-image: linear-gradient(to left, #000, transparent);
  
  display: flex;
  align-items: center;
  margin-left: 2px;
  color: #ccc;
  
  .visualized {
    color: #1E90FF;
  }

  @media (max-width: 800px) {
    right: 20px;
  }
`;

export const ContainerMessage = styled.section`
  justify-content: space-between;
  min-width: 95%;
  max-width: 95%;

  div {
    max-width: 90%;
  }
`;

export const Message = styled.p`
  color: #ccc;
  text-align: start;
  font-size: .9rem;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;

  .svg-camera {
    margin-right: 5px;
  }
`;

export const MessageDeleted = styled.p`
  font-style: italic;
  font-size: .8rem;
  opacity: .8;
  max-width: 100%;
  margin-top: 5px;

  svg {
    font-size: .75rem;
  }
`;

export const SpanMessageDeleted = styled.span`
  flex-flow: wrap;
`;