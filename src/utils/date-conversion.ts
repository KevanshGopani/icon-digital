export function convertTimestampToDate(timestamp: any) {
  const date = new Date(timestamp);

  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
  const year = date.getFullYear();

  // Return formatted date

  return `${day}/${month}/${year}`;
}
