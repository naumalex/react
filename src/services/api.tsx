import { BASE_URL } from '../utils/constants';
import { Animal } from './api.types';

export class Api {
  static async getAnimal(uid: string): Promise<Animal> {
    const params = new URLSearchParams();
    params.set('uid', uid);
    const res = await fetch(`${BASE_URL}animal?${params}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });
    const animalObj = await res.json();
    return animalObj.animal;
  }
}
