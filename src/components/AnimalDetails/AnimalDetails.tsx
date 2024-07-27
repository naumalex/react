import { useNavigate } from 'react-router-dom';
import styles from './AnimalDetails.module.css';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetAnimalQuery } from '../../services/animalApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setCard } from '../../store/cardSlice';

export function AnimalDetails() {
  const params = useParams();
  const uid = params.id;
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAnimalQuery(uid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCard(data?.animal));
  }, [data, dispatch]);

  const handleCloseButtonClick = () => {
    navigate({
      pathname: '/',
      search: location.search,
    });
  };
  const animal = useSelector((state: RootState) => state.card);

  return error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <>Loading...</>
  ) : animal ? (
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
  ) : null;
}
