const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const hours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];

export function getDay(date) {
  return days[date.getDay()];
}

export function getMonth(date) {
  return months[date.getMonth()];
}

export function getDate(date) {
  return date.getDate();
}

export function getYear(date) {
  return date.getFullYear();
}

export function getTime(date) {
  const hour24H = date.getHours();
  const hour12H = hours[hour24H];
  const minutes = date.getMinutes();
  const minutes12H = minutes < 10 ? `0${minutes}` : minutes;
  const period = hour24H < 12 ? "AM" : "PM";
  return `${hour12H}:${minutes12H} ${period}`;
}
