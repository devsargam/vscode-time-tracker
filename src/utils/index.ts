export function formatTimeDifference(timeDiff: number): string {
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  if (minutes === 0) {
    return `${seconds}s`;
  }
  if (hours === 0) {
    return `${minutes}m, ${seconds}s`;
  }
  return `${hours}h, ${minutes}m, ${seconds}s`;
}

export function getToday(): string {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  return formattedDate;
}
