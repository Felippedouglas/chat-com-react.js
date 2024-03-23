import React, { useEffect, useRef, useState } from "react";
import * as C from "./styles";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from "../../../../services/firebase";
import imageCompression from 'browser-image-compression';
import { v4 } from 'uuid';
import { MdOutlineClose, MdSend } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import Loading from "../../../../components/load";

const UploadArchives = ({ chatId, userInfo, sendFile, setSendFile, sendMessage, setFilesSendLength, setIsOpenPopUpSendArchives }) => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadingUploadFiles, setLoadingUploadFiles] = useState(false);
  const storage = getStorage(app);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  
    const validFiles = Array.from(files).filter((file) =>
      allowedExtensions.test(file.name)
    );
  
    if (validFiles.length > 0) {
      const newSelectedFiles = [...selectedFiles, ...validFiles];
      const newPreviewUrls = validFiles.map((file) => URL.createObjectURL(file));
  
      setSelectedFiles(newSelectedFiles);
      setPreviewUrls((prevPreviewUrls) => [...prevPreviewUrls, ...newPreviewUrls]);
  
      setCurrentImageIndex(newSelectedFiles.length - validFiles.length);
    } else {
      console.log('cancelou envio')
    }
  };

  useEffect(() => {
    if (sendFile && fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [sendFile, fileInputRef]);

  useEffect(() => {
    setFilesSendLength(selectedFiles.length || 0)
  }, [selectedFiles]);

  const handleUploadClick = async () => {
    if (selectedFiles.length > 0) {

      setLoadingUploadFiles(true);

      try {
        const uploadPromises = selectedFiles.map(async (selectedFile) => {
          const compressedFile = await compressImage(selectedFile);
          const randomId = v4();
          const fileName = `${randomId}.${compressedFile.name?.split('.').pop()}`;
          const storageRef = ref(storage, `images/${chatId}/${fileName}`);
          const snapshot = await uploadBytes(storageRef, compressedFile);
          const filePath = storageRef.fullPath;
          const downloadURL = await getDownloadURL(snapshot.ref);
  
          const image = new Image();
          image.src = URL.createObjectURL(compressedFile);
  
          return new Promise((resolve, reject) => {
            image.onload = () => {
              const width = image.width;
              const height = image.height;
  
              const fileDetails = {
                type: 'image',
                extension: compressedFile.name.split('.').pop(),
                name: compressedFile.name.replace('.' + compressedFile.name.split('.').pop(), ''),
                src: downloadURL,
                filePath: filePath,
                width: width,
                height: height
              };
  
              resolve(fileDetails);
            };
  
            image.onerror = (error) => {
              reject(error);
              setLoadingUploadFiles(false);
            };
          });
        });
  
        const uploadedFiles = await Promise.all(uploadPromises);
  
        uploadedFiles.forEach((file) => {
          sendMessage('image', file);
        });
  
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

  const removeImage = (index) => {
    const updatedSelectedFiles = [...selectedFiles];
    const updatedPreviewUrls = [...previewUrls];

    updatedSelectedFiles.splice(index, 1);
    updatedPreviewUrls.splice(index, 1);

    setSelectedFiles(updatedSelectedFiles);
    setPreviewUrls(updatedPreviewUrls);

    if (currentImageIndex >= updatedSelectedFiles.length) {
      setCurrentImageIndex(0);
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
          accept=".jpg, .jpeg, .png"
          onChange={handleFileInputChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          multiple
        />
        {selectedFiles.length > 0 && (
          <C.MainArchiveView
              src={previewUrls[currentImageIndex]}
              alt={`Preview ${currentImageIndex}`}
            />
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
              <C.ContentArchivesSend className={currentImageIndex == index ? 'active' : ''} key={index}>
                <C.ArchiveSend onClick={()=> setCurrentImageIndex (index)} key={index} src={previewUrl} alt={`Preview ${index}`} />
                <C.RemoveArchiveSend className="bt-remove-archive" onClick={() => removeImage(index)}><MdOutlineClose /></C.RemoveArchiveSend>
              </C.ContentArchivesSend>
            ))}
          </C.ContainerArchivesSend>
          <C.ContainerSendArchive>
            {previewUrls && previewUrls.length >= 1 &&
              <button className="bt-add-more" onClick={() => fileInputRef.current.click()}>
                <BiPlus />
              </button>
            }
            <button className="bt-send" onClick={handleUploadClick} disabled={loadingUploadFiles}>
              {loadingUploadFiles ?
                <Loading showIcon={false}/>
              :
                <>
                  <MdSend />
                </>
              }
              {(selectedFiles && selectedFiles.length >= 1) &&
                <span className="length-archives">{selectedFiles.length}</span>
              }
            </button>
          </C.ContainerSendArchive>
        </C.FooterSendArchives>
      </C.Container>
    </>
  );
}

export default UploadArchives;
