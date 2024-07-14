import { useLoaderData, useNavigate } from 'react-router-dom';
import { Animal as AnimalType } from '../../services/api';
import styles from './AnimalDetails.module.css';
import { Button } from '../Button';

export function AnimalDetails() {
  const { animal } = useLoaderData() as { animal: AnimalType };
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    navigate({
      pathname: '/',
      search: location.search,
    });
  };

  return (
    <div className={styles.animalDetails}>
      <h3>Animal Details</h3>
      <div>{`Name: ${animal.name}`}</div>
      <div>{`Uid: ${animal.uid}`}</div>
      <div>{`Avian: ${animal.avian}`}</div>
      <div>{`Canine: ${animal.canine}`}</div>
      <div>{`Earth Animal: ${animal.earthAnimal}`}</div>
      <div>{`Earth Insect: ${animal.earthInsect}`}</div>
      <Button onClick={handleCloseButtonClick}>Close</Button>
    </div>
  );
}
