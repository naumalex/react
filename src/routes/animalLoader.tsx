import { Animal as AnimalType, Api } from '../services/api';

export async function animalLoader({
  params,
}: {
  params: { id?: string };
}): Promise<AnimalType> {
  if (!params.id) {
    throw new Error('Params are not defined');
  }
  const animal = await Api.getAnimal(params.id);
  return animal;
}
