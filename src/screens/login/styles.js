import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #202020;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  svg {
    width: 100px;
    height: 100px;
    color: #1E90FF;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: -10px 0;
`;

export const Info = styled.span`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
  font-weight: 500;
  padding: 10px 15px;
  text-align: center;
  max-width: 500px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    opacity: .7;
  }

  svg {
    height: 25px;
    width: 25px;
    margin-right: 5px;
  }
`;
