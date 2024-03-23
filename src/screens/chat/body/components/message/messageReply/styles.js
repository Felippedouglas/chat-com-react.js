import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff50;
    padding: 5px 10px;
    margin: ${props => props.type != 'text' ? '5px 2px 10px 2px' : '0 0 10px 0'};
    border-radius: 5px;
    max-width: ${props => props.type != 'text' ? '400px' : 'unset'};
    min-width: 100%;
  
    h3 {
        font-size: .9rem;
        margin-bottom: 5px;
    }

    span {
        font-size: .8rem;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    svg {
        margin-right: 5px;
        height: 15px;
        width: 15px;
    }

    .midia {
        display: flex;
        align-items: center;
    }

    img {
        height: 50px;
        max-height: 50px;
        max-width: 80px;
        border-radius: 5px;
        object-fit: cover;
        margin-left: 20px;
    }

`;

export const MessageDeleted = styled.section`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: .9rem;
  font-weight: 600;
  margin: 10px 0;

  svg {
    color: #ddd;
  }
`;

export const SpanMessageDeleted = styled.span`
  font-style: italic;
  font-weight: 500;
  max-width: 100%;
  flex-flow: wrap;
  opacity: .9;
`;
