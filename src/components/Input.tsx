import React from 'react';
import { EventHandler } from './search-bar/SearchBar';

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange: EventHandler<HTMLInputElement>;
}

export class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const { className, placeholder, value, onChange } = this.props;
    return (
      <div className="input-wrapper">
        <input
          className={`input ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        ></input>
      </div>
    );
  }
}
