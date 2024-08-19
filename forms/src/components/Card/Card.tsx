import { FormData } from '../../store/savedFormsDataSlice';
import styles from './Card.module.css';

interface CardProps {
  data: FormData;
}

export function Card({ data }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={data.image} />
      </div>
      <div className={styles.text}>Name: {data.name}</div>
      <div className={styles.text}>Age: {data.age}</div>
      <div className={styles.text}>Gender: {data.gender}</div>
      <div className={styles.text}>Email: {data.email}</div>
      <div className={styles.text}>Country: {data.selectedCountry}</div>
      <div className={styles.text}>
        Is T&C Accepted: {data.isTCAccepted.toString()}
      </div>
      <div className={styles.text}>Password: {data.password}</div>
      <div className={styles.text}>
        Confirm Password: {data.confirmPassword}
      </div>
    </div>
  );
}
