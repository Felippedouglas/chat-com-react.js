import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${props => props.showIcon ? '100vh' : '100%'};
`;

export const Logo = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
`