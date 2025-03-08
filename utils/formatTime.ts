export function formatTime(time: Date) {
  const localTime = time.toLocaleString();
  const [beforeT, _] = localTime.split("T");
  return {
    dateTime: beforeT,
    text: beforeT.replace(/-/g, "."),
  };
}
