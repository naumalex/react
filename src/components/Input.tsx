import { EventHandler } from './SearchBar/SearchBar';

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange: EventHandler<HTMLInputElement>;
}

export function Input(props: InputProps) {
  const { className, placeholder, value, onChange } = props;
  return (
    <div className="input-wrapper">
      <input
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
}
