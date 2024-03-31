import { downloadArchive } from '../../options/download/index.js';
import * as C from './styles.js';
import { IoIosDocument } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { ImFolderOpen } from "react-icons/im";

export default function Document( {children,  document } ) {

    
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
    return(
        <C.Container>
            <C.Content>
                <main>
                  <div className='div-img'>
                    <IoIosDocument />
                  </div>
                  <div>
                    <h3 className='name'>{document?.name}</h3>
                    <p className='type'>{document?.extension_name}</p>
                    <span className='size'>{formatFileSize(document?.size)}</span>
                  </div>
                </main>
                <footer>
                  <button onClick={()=>window.open(document.src, '_blank')} className='bt-download'><ImFolderOpen/> Abrir</button>
                  <button className='bt-download' onClick={()=>downloadArchive(document)}><MdDownload/> Baixar</button>
                </footer>
            </C.Content>
            {children}
        </C.Container>
    )
}