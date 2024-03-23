import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  width: calc(100vw - 350px);
  z-index: 5;

  @media (max-width: 1000px) {
    width: calc(100vw - 300px);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;