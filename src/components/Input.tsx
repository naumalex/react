import React from 'react';
import { Props } from './SearchBar';

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
}

export class Input extends React.Component<InputProps> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { className, placeholder, value } = this.props;
    return (
      <div className="input-wrapper">
        <input
          className={`input ${className}`}
          placeholder={placeholder}
          value={value}
        ></input>
      </div>
    );
  }
}
