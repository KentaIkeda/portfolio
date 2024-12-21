/**
 * @param {Date} updatedAt 更新日時
 * @returns {Object} dateTimeに渡される文字列とdateに渡される文字列
 * **/
export const formatDate: (updatedAt: Date) => { date: string; dateTime: string } = (
  updatedAt: Date
) => {
  const updatedAtString = updatedAt.toString();
  const [splittedDate] = updatedAtString.split('T');
  const dateTime = splittedDate;
  const date = splittedDate.replace(/-/g, '.');
  return {
    date,
    dateTime,
  };
};
