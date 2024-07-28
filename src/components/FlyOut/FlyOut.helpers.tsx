import { Animal } from '../../services/api.types';

export function buildCSVFile(animals: Animal[]) {
  const titleKeys = Object.keys(animals[0]);
  const data = [];
  data.push(titleKeys);
  animals.forEach((animal) => data.push(Object.values(animal)));
  const csvContent = data.reduce((content, row) => {
    return `${content}${row.join(',')}\n`;
  }, '');
  const blobForCSV = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8,',
  });
  return URL.createObjectURL(blobForCSV);
}
