export function convertDateFormatToUser(date: Date): string {
  const day = "" + date.getDate();
  const month = "" + (date.getMonth() + 1);
  const year = date.getFullYear();
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}
