import { ReactNode, useContext } from 'react';
import styles from './Button.module.css';
import { ThemeContext } from '../../contexts/ThemeContext';

interface ButtonProps {
  className?: string;
  placeholder?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
}

export function Button({ className, type, onClick, children }: ButtonProps) {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="button-wrapper">
      <button
        className={`${className ? className + ' ' : ''} ${styles.button} ${isDarkTheme ? styles.dark : styles.light}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
