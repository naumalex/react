import styles from './Loader.module.css';

interface LoaderProps {
  loading: boolean;
}

export function Loader({ loading }: LoaderProps) {
  if (!loading) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.loader} />
    </div>
  );
}
