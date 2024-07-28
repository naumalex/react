import { useContext } from 'react';
import { Button } from '../Button/Button';
import { ThemeContext } from '../../contexts/ThemeContext';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { switchTheme } = useContext(ThemeContext);
  return (
    <Button onClick={() => switchTheme()} className={className}>
      Switch Theme
    </Button>
  );
}
