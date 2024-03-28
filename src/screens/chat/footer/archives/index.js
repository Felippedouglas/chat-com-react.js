import React, { useState, useEffect, useRef } from "react";
import * as C from "./styles";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from "../../../../services/firebase";
import imageCompression from 'browser-image-compression';
import { v4 } from 'uuid';
import { MdOutlineClose, MdSend } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import Loading from "../../../../components/load";
import { FaPlay } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const UploadArchives = ({ chatId, userInfo, sendFile, setSendFile, sendMessage, setFilesSendLength, setIsOpenPopUpSendArchives, fileType }) => {
  // Estados
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [loadingUploadFiles, setLoadingUploadFiles] = useState(false);
  const storage = getStorage(app);

  const fileInputRef = useRef(null);

  // Extensões permitidas
  const allowedExtensions = fileType === 'image' ? /(\.jpg|\.jpeg|\.png)$/i
    : fileType === 'video' ? /(\.mp4|\.mov|\.avi)$/i
      : fileType === 'document' ? /(\.doc|\.docx|\.pdf)$/i
        : /(\.jpg|\.jpeg|\.png)$/i;  // Padrão para imagens

  // Manipulação de input de arquivos
  const handleFileInputChange = async (event) => {
    const files = event.target.files;
    const validFiles = Array.from(files).filter((file) =>
      allowedExtensions.test(file.name)
    );

    if (validFiles.length > 0) {
      const compressedFiles = await Promise.all(validFiles.map(async (file) => {
        if (file.type.includes('image')) {
          return await compressImage(file);
        }
        return file;
      }));

      setSelectedFiles([...selectedFiles, ...compressedFiles]);
      setPreviewUrls([...previewUrls, ...compressedFiles.map((file) => URL.createObjectURL(file))]);
    } else {
      console.log('Tipo de arquivo não permitido.');
    }
  };

  // Seleção programática de arquivos
  useEffect(() => {
    if (sendFile && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [sendFile, fileInputRef]);

  // Atualização do contador de arquivos enviados
  useEffect(() => {
    setFilesSendLength(selectedFiles.length);
  }, [selectedFiles]);

  // Upload dos arquivos
  const handleUploadClick = async () => {
    if (selectedFiles.length > 0) {
      setLoadingUploadFiles(true);

      try {
        const uploadPromises = selectedFiles.map(async (selectedFile) => {
          const randomId = v4();
          const fileName = `<span class="math-inline">\{randomId\}\.</span>{selectedFile.name.split('.').pop()}`;
          const storageRef = ref(storage, `files/<span class="math-inline">\{chatId\}/</span>{fileName}`);
          const snapshot = await uploadBytes(storageRef, selectedFile);
          const filePath = storageRef.fullPath;
          const downloadURL = await getDownloadURL(snapshot.ref);

          return {
            type: selectedFile.type.split('/')[0], // Tipo principal (imagem, vídeo, etc.)
            extension: selectedFile.name.split('.').pop(),
            name: selectedFile.name.replace('.' + selectedFile.name.split('.').pop(), ''),
            src: downloadURL,
            filePath: filePath,
          };
        });

        const uploadedFiles = await Promise.all(uploadPromises);
        uploadedFiles.forEach((file) => sendMessage(file.type, file));

        // Limpar seleção após upload
        setSelectedFiles([]);
        setPreviewUrls([]);
        setSendFile(false);
        setLoadingUploadFiles(false);
        setIsOpenPopUpSendArchives(false);
      } catch (error) {
        console.error('Erro ao fazer upload dos arquivos:', error);
      }
    }
  };
  
  const closesendFile = () => {
    setSelectedFiles([]);
    setPreviewUrls([]);
    setLoadingUploadFiles(false);

    setTimeout(() => {
      setSendFile(false);
      setIsOpenPopUpSendArchives(false);
    }, 100);
  };

  const removeFile = (index) => {
    const updatedSelectedFiles = [...selectedFiles];
    const updatedPreviewUrls = [...previewUrls];

    updatedSelectedFiles.splice(index, 1);
    updatedPreviewUrls.splice(index, 1);

    setSelectedFiles(updatedSelectedFiles);
    setPreviewUrls(updatedPreviewUrls);

    if (currentFileIndex >= updatedSelectedFiles.length) {
      setCurrentFileIndex(0);
    }
  };

  // Comprimir imagem
  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
      onProgress: (progress) => {
        const percentage = Math.round((progress.loaded / progress.total) * 100);
      },
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error('Erro ao comprimir a imagem:', error);
      return file;
    }
  };

  // Formatar tamanho do arquivo
  const formatFileSize = (sizeInBytes) => {
    if (sizeInBytes === 0) return '0 Bytes';
  
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(1024));
    return parseFloat((sizeInBytes / Math.pow(1024, i)).toFixed(2)) + ' ' + units[i];
  };

  // Obter tipo de arquivo
  const getFileType = (fileType) => {
    switch(fileType) {
      case 'image/jpeg':
        return 'Imagem JPEG';
      case 'image/png':
        return 'Imagem PNG';
      case 'video/mp4':
        return 'Vídeo MP4';
      case 'video/quicktime':
        return 'Vídeo QuickTime';
      case 'video/x-msvideo':
        return 'Vídeo AVI';
      case 'application/msword':
        return 'Documento Word';
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'Documento Word (formato moderno)';
      case 'application/pdf':
        return 'Documento PDF';
      default:
        return 'Arquivo';
    }
  };

  return (
    <>
      <C.Container showSendFiles={selectedFiles && selectedFiles.length >= 1}>
        {(selectedFiles && selectedFiles.length >= 1) &&
          <C.Header>
            <button className="close" onClick={closesendFile}><MdOutlineClose /></button>
            <div className="user">
              <img className="avatar" src={userInfo.photoURL} />
              <h3 className="name">{userInfo.name}</h3>
            </div>
          </C.Header>
        }
        <input
          type="file"
          accept={allowedExtensions} // Adicionar tipos de arquivos adicionais aqui
          onChange={handleFileInputChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          multiple
        />
        {fileType == 'image' &&
          <C.MainFileView
            src={previewUrls[currentFileIndex]}
            alt={`Preview ${currentFileIndex}`}
          />
        }
        {fileType == 'video' &&
          <video
            className="video-preview"
            src={previewUrls[currentFileIndex]}
            alt={`Preview ${currentFileIndex}`}
            controls
          />
        }
        {fileType === 'document' && selectedFiles && selectedFiles[currentFileIndex]?.type?.startsWith('application') && (
          <div className="doc-view">
            <IoIosDocument />
            <p>{selectedFiles[currentFileIndex]?.name}</p>
            <p>{getFileType(selectedFiles[currentFileIndex]?.type)}</p>
            <p>{formatFileSize(selectedFiles[currentFileIndex]?.size)}</p>
          </div>
        )}
        <C.FooterSendArchives>
          {(selectedFiles && selectedFiles.length >= 1) ?
            <div></div>
            :
            <C.ContainerCancelUploadArchives>
              <button onClick={closesendFile}>Cancelar</button>
              <button onClick={() => fileInputRef.current.click()}>Adicionar Arquivos</button>
            </C.ContainerCancelUploadArchives>
          }
          <C.ContainerArchivesSend>
            {previewUrls.length > 0 && previewUrls.map((previewUrl, index) => (
              <C.ContentArchivesSend className={currentFileIndex === index ? 'active' : ''} key={index}>
                {selectedFiles[index].type.startsWith('image') && (
                  <img onClick={() => setCurrentFileIndex(index)} key={index} src={previewUrl} alt={`Preview ${index}`} />
                )}
                {selectedFiles[index].type.startsWith('video') && (
                  <video
                    onClick={() => setCurrentFileIndex(index)}
                    className="video"
                    src={previewUrls[currentFileIndex]}
                    alt={`Preview ${currentFileIndex}`}
                  >
                    <FaPlay/>
                  </video>
                )}
                {selectedFiles[index].type.startsWith('application') && (
                  <div className="document" onClick={() => setCurrentFileIndex(index)}>
                    <IoIosDocument />
                  </div>
                )}
                <C.RemoveArchiveSend className="bt-remove-archive" onClick={() => removeFile(index)}><MdOutlineClose /></C.RemoveArchiveSend>
              </C.ContentArchivesSend>
            ))}
          </C.ContainerArchivesSend>
          <C.ContainerSendArchive>
            {previewUrls && previewUrls.length >= 1 && (
              <button className="bt-add-more" onClick={() => fileInputRef.current.click()}>
                <BiPlus />
              </button>
            )}
            <button className="bt-send" onClick={handleUploadClick} disabled={loadingUploadFiles}>
              {loadingUploadFiles ?
                <Loading />
                :
                <>
                  <MdSend />
                </>
              }
              {(selectedFiles && selectedFiles.length >= 1) && (
                <span className="length-archives">{selectedFiles.length}</span>
              )}
            </button>
          </C.ContainerSendArchive>
        </C.FooterSendArchives>
      </C.Container>
    </>
  );
};

export default UploadArchives;