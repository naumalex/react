import styles from './AnimalDetails.module.css';
import { Button } from '../Button/Button';
import { redirect } from 'next/navigation';
import { Animal } from '../../services/api.types';

interface AnimalDetailsProps {
  animal: Animal;
}

export function AnimalDetails({ animal }: AnimalDetailsProps) {
  const handleCloseButtonClick = () => {
    redirect(`/${location.search}`);
  };
  return animal ? (
    <div className={styles.animalDetails}>
      <h3>Animal Details More</h3>
      <div>{`Name: ${animal.name}`}</div>
      <div>{`Uid: ${animal.uid}`}</div>
      <div>{`Avian: ${animal.avian}`}</div>
      <div>{`Canine: ${animal.canine}`}</div>
      <div>{`Earth Animal: ${animal.earthAnimal}`}</div>
      <div>{`Earth Insect: ${animal.earthInsect}`}</div>
      <div>{`Feline: ${animal.feline}`}</div>
      <Button onClick={handleCloseButtonClick}>Close</Button>
    </div>
  ) : null;
}
