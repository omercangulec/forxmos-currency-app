export const today = new Date().toJSON().slice(0, 10);

export function getTodayDate() {
  const today = new Date().toJSON().slice(0, 10);
  return today;
}

export function setTimeRange(days) {
  let today = new Date();
  today.setDate(today.getDate() - days);
  today = today.toJSON().slice(0, 10);
  return today;
}
