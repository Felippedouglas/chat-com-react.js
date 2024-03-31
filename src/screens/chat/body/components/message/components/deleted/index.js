import ConvertDate from '../../../../../../../components/convert-date/index.js';
import { downloadArchive } from '../../options/download/index.js';
import * as C from './styles.js';
import { FaTrashAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export default function Deleted( { date } ) {

  return(
    <C.Container>
      <FaTrashAlt></FaTrashAlt> <C.MessageDeleted>Mensagem excluída</C.MessageDeleted>
      <p>
        {date && <ConvertDate hourAndMinutes={date?.seconds} />}
      </p>
    </C.Container>
  )
};