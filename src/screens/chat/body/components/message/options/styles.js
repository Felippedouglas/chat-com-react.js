import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  min-width: 150px;
  max-width: 150px;
  border-radius: 5px;
  padding: 5px;
  bottom: ${props => props.message_index > 1 ? '40px' : 'unset'};
  top: ${props => props.message_index <= 1 ? '40px' : 'unset'};
  left: 50%;
  transform: translateX(-50%);
  background: #505050;
  color: #fff;
  z-index: 2;

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

  @media (max-width: 400px) { 
    
    left: ${props => props.by_other_user ? 'unset' : '10px'};
    right: ${props => props.by_other_user ? '10px' : 'unset'};
    transform: translateX(0);
  }
`;
