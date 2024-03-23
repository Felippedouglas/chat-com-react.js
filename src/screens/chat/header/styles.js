import styled from "styled-components";

export const Container = styled.header`
  height: 59px;
  background-color: #202020;
  color: #fff;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
  z-index: 2;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    background-color: #1E90FF;
    padding: 2px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }
`;

export const BackDefault = styled.button`
  display: flex;
  align-items: center;
  background: unset;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all .3s ease;
  margin-right: 10px;

  &:hover {
    color: #ccc;
  }

  svg {
    background: unset;
    margin-right: 0;
  }
`;

export const NameContent = styled.button`
  display: grid;
  background: unset;
  color: #fff;
  border: none;
  text-align: start;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }
`;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 600;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LastLogin = styled.span`
  display: flex;
  align-items: center;
  font-size: .72rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2px;
  transition: all .3s ease;

  svg {
    background: none;
    margin: 0;
    margin-right: 3px;
    padding: 0;
    font-size: .8rem;
    width: unset;
    height: unset;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #ccc;
    cursor: pointer;
    transition: all .3s ease;
  }

  svg:hover {
    color: #fff;
  }
`;
