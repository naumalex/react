import { useNavigate } from 'react-router-dom';
import styles from './AnimalDetails.module.css';
import { Button } from '../Button';
import { useTypedLoaderData } from '../../routes/useTypedLoaderData';
import { animalLoader } from '../../routes/animalLoader';

export function AnimalDetails() {
  const animal = useTypedLoaderData<typeof animalLoader>();
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
      <div>{`Feline: ${animal.feline}`}</div>
      <Button onClick={handleCloseButtonClick}>Close</Button>
    </div>
  );
}
