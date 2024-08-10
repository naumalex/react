'use client';
import styles from './AnimalDetails.module.css';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetAnimalQuery } from '../../services/animalApi';
import { useEffect } from 'react';
import { setCard } from '../../store/cardSlice';
import { redirect } from 'next/navigation';

interface AnimalDetailsProps {
  uid: string;
}

export function AnimalDetails({ uid }: AnimalDetailsProps) {
  const { data, isLoading, error } = useGetAnimalQuery(uid);
  console.log(`uid ${uid}`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCard(data?.animal));
  }, [data, dispatch]);

  const handleCloseButtonClick = () => {
    redirect(`/${location.search}`);
  };
  const animal = useSelector((state: RootState) => state.card);

  return error ? (
    <>Oh no, there was an error {error}</>
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
