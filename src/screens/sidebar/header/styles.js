import styled from "styled-components";

export const Container = styled.header`
  height: 59px;
  background-color: #202020;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  box-shadow: 0 1px 2px #0003;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 50%;
  color: #ccc;
  transition: all .3s ease;

  &:hover {
    color: #fff;
    background: #353535;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all .3s ease;
  }
`
