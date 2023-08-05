export const getDateInfo = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[today.getDay()];
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const dateString =
    month + "월 " + day + "일(" + dayOfWeek + ") " + hours + ":" + minutes;

  return dateString;
};
