import { useEffect } from "react";
import * as C from "./styles";

export default function ConvertDate({ elapsedTime, hourAndMinutes, date }) {

  // elapsedTime e hourAndMinutes são timestamp que serão convertidos para data

  
  // Função para formatar o timestamp 'elapsedTime'
  function convertToElapsedTime() {

    const currentDate = new Date();
    const timestampDate = new Date(elapsedTime * 1000);

    // Calcula a diferença em segundos entre a data atual e a data do timestamp
    const difference = (currentDate - timestampDate) / 1000;
  
    // Verifica há quanto tempo a mensagem foi enviada e retorna uma string no formato
    if (difference < 60) {
      return `agora`;
    } else if (difference < 3600) {
      // Se a mensagem foi enviada há menos de uma hora, calcula e retorna o número de minutos desde a mensagem
      const minutes = Math.floor(difference / 60);
      return `${minutes} min`;
    } else if (difference < 86400) {
      // Se a mensagem foi enviada há menos de um dia, calcula e retorna o número de horas desde a mensagem
      const hours = Math.floor(difference / 3600);
      return `${hours} ${hours > 1 ? 'horas' : 'hora'}`;
    } else if (difference < 1209600) {
      // Se a mensagem foi enviada há menos de duas semanas, calcula e retorna o número de dias desde a mensagem
      const days = Math.floor(difference / 86400);
      return `${days} ${days > 1 ? 'dias' : 'dia'}`;
    } else {
      // Se passaram mais de duas semanas desde a mensagem, formata e retorna a data da mensagem no formato "dia/mês"
      const day = timestampDate.getDate().toString().padStart(2, '0');
      const month = (timestampDate.getMonth() + 1).toString().padStart(2, '0');
      return `${day}/${month}`;
    }

  }

  // Função para formatar o timestamp 'message'
  function convertToHourAndMinutes() {
    const date = new Date(hourAndMinutes * 1000);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }

  function convertToDate() {
    const data = new Date(date * 1000);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day

    // Check if it's today
    if (data.toDateString() === today.toDateString()) {
        return 'Hoje às ' + addZero(data.getHours()) + ':' + addZero(data.getMinutes());
    }
    
    // Check if it's yesterday
    const yesterday = new Date(today - oneDay);
    if (data.toDateString() === yesterday.toDateString()) {
        return 'Ontem às ' + addZero(data.getHours()) + ':' + addZero(data.getMinutes());
    }
    
    // Check if it's more than a year ago
    if (today.getFullYear() - data.getFullYear() > 1) {
        return addZero(data.getDate()) + '/' + addZero(data.getMonth() + 1) + '/' + data.getFullYear() + ' às ' + addZero(data.getHours()) + ':' + addZero(data.getMinutes());
    }

    // Otherwise, return the date in the format xx/xx at xx:xx
    return addZero(data.getDate()) + '/' + addZero(data.getMonth() + 1) + ' às ' + addZero(data.getHours()) + ':' + addZero(data.getMinutes());
}

function addZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number.toString();
}
  

  return (
      <>
        {elapsedTime && <C.Date>{convertToElapsedTime()}</C.Date>}
        {hourAndMinutes && <C.Date>{convertToHourAndMinutes()}</C.Date>}
        {date && <C.Date>{convertToDate()}</C.Date>}
      </>
  )
}
