import { Animal } from '../services/api';

export const getAnimalType = (animal: Animal) => {
  const keysToSkip: Array<keyof Animal> = ['uid', 'name'];
  return (Object.keys(animal) as Array<keyof Animal>)
    .filter((typeKey) => animal[typeKey] && !keysToSkip.includes(typeKey))
    .map((typeKey) => typeKey.replace(/([a-z])([A-Z])/, `$1 $2`).toLowerCase())
    .join(', ');
};
