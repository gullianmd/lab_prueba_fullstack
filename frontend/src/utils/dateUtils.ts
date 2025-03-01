export function strToDate(dateStr : string) : Date | null{
  // Expresión regular para el formato "YYYY-MM-DD HH:mm:ss"
  const regex1 = /^\d{4}-\d{2}-\d{2} (\d{2}:\d{2}(:\d{2})?)?$/;
  // Expresión regular para el formato "YYYY-MM-DDTHH:mm:ss.sssZ"
  const regex2 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  if (regex1.test(dateStr)) return new Date(dateStr);
  
  else if (regex2.test(dateStr)) return new Date(dateStr.replace("T", " "));
    
  else return null;
}

export function simplifyDate(dateStr : string, shortDate = false) : string{

  const newDate = strToDate(dateStr);

  if (!newDate) return dateStr;

  return setFriendlyDate(newDate, shortDate);

}

function setFriendlyDate(date : Date, shortDate = false) : string{
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const shortMonth = date.getMonth();
    const year = date.getFullYear();
    const shortYear = Number(String(year).slice(-2));
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  
    return shortDate ? 
    `${day}-${shortMonth}-${shortYear}` 
    : 
    `${day} ${month} ${year} | ${hours}:${minutesFormatted} hrs`;
}

