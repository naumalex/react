import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import styles from './Main.module.css';

export function Main() {
  const forms = useSelector((state: RootState) => state.savedFormsData);
  return (
    <div>
      <div>
        <Link to='uncontrolled'>Uncontrolled Form</Link>
      </div>
      <div>
        <Link to='reacthook'>React Hook Form</Link>
      </div>
      <div className={styles.cards}>
        {forms.length > 0 ? forms.map((card) => <Card data={card} />) : ''}
      </div>
    </div>
  );
}
