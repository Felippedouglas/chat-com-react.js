import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: ${props => props.showSendFiles ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background: #222222;

  @media(max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    padding: 5px 10px;
  }

  .video-preview {
    max-width: 100%;
    max-height: 100%;
  }

  .doc-view {
    padding: 20px 50px;
    border: 2px solid #505050;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }

  .doc-view svg {
    width: 70px;
    height: 70px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    color: #ccc;
    cursor: pointer;
    background: none;
    margin-right: 20px;
    border: none;
    transition: all .3s ease;

  }

  .close:hover {
    color: #fff;
    background: #404040;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .avatar {
    border-radius: 50px;
    height: 40px;
    width: 40px;
  }

  .name {
    font-weight: 600;
    font-size: .9rem;
    color: #fff;
    margin-left: 10px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const MainFileView = styled.img`
  margin-top: 50px;
  height: 50vh;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: all .3s ease;

  &:hover {
    opacity: .8;
  }
`;

export const FooterSendArchives = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 5px;
`;

export const ContainerCancelUploadArchives = styled.div`
  display: flex;
  align-items: center;

  button {
    background: #222222;
    border: 2px solid #909090;
    color: #bbb;
    font-size: .8rem;
    margin-right: 5px;
    font-weight: 600;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: all .3s ease;
  }

  button:hover {
    color: #fff;
    border-color: #fff;
  }
`;

export const ContainerArchivesSend = styled.div`
  display: flex;
  align-items: center;
  max-width: 90%;
  padding-bottom: 5px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track{
    background-color: #222222;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #DBD1C4;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: #A69E94;
  }
`;

export const ContentArchivesSend = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid #404040;
  margin: 2px;
  border-radius: 5px;

  &.active {
    border-color: #f00;
  }

  img {
    min-height: 70px;
    max-height: 70px;
    min-width: 70px;
    max-width: 70px;
    object-fit: cover;
    background: #222222;
    cursor: pointer;
    border: 1px solid #252525;
    border-radius: 5px;
    transition: all .3s ease;
  }

  .video {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70px;
    max-height: 70px;
    min-width: 70px;
    max-width: 70px;
    object-fit: cover;
    background: #222222;
    cursor: pointer;
    border: 1px solid #252525;
    border-radius: 5px;
    transition: all .3s ease;
  
  }

  .video svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f0f;
    z-index: 9;
    background: #00f;
  }

  img:hover, video:hover {
    opacity: .8;
  }

  .document {
    color: #fff;
  }

  .document svg {
    width: 50px;
    height: 50px;
  }
`;


export const RemoveArchiveSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 5px;
  height: 25px;
  width: 25px;
  font-size: 1.2rem;
  border-radius: 50px;
  border: 1px solid #ccc;
  background: #181818;
  color: #fff;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background: #353535;
  }
  
`;

export const ContainerSendArchive = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    width: 50px;
    height: 50px;
    transition: all .3s ease;
  }

  .bt-add-more {
    color: #bbb;
    background: #222222;
    border: 2px solid #909090;
    margin: 0 10px;
  }

  .bt-add-more:hover {
    color: #fff;
    border-color: #fff;
  }

  .bt-send {
    position: relative;
    background: #1e90ff;
    width: 60px;
    height: 60px;
  }

  .bt-send:disabled {
    background: #707070;
    cursor: default;
  }

  .bt-send:disabled:hover {
    opacity: 1;
  }

  .bt-send:hover {
    opacity: .7;
  }

  .bt-send .length-archives {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
    background: #fff;
    padding: 5px;
    font-size: .8rem;
    min-width: 25px;
    min-height: 25px;
    font-weight: 700;
    color: #181818;
    border-radius: 50px;
  }
`;