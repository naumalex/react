import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  placeholder?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

export function Button(props: ButtonProps) {
  const { className, type, onClick, children } = props;
  return (
    <div className="button-wrapper">
      <button
        className={`${className ? className + ' ' : ''} ${styles.button}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
