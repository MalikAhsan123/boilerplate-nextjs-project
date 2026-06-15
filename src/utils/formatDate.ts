export function formatDate(date: string | Date, locale = 'en-US'): string {
  const value = typeof date === 'string' ? new Date(date) : date;
  return value.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
