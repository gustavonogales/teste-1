export const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-').map(Number);
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
};
