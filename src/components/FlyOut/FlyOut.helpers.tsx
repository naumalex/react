import { Animal } from '../../services/api.types';

export const buildCSVFile = (animals: Animal[]) => {
  const titleKeys: string[] = Object.keys(animals[0]);
  const data: string[][] = [];
  data.push(titleKeys);
  animals.forEach((animal) => data.push(Object.values(animal)));
  const csvContent = data.reduce((content, row) => {
    return `${content}${row.join(',')}\n`;
  }, '');
  const blobForCSV = new Blob([csvContent], {
    type: 'text/csv;charset=utf-8,',
  });
  return URL.createObjectURL(blobForCSV);
};
