import React from 'react';
import { Props } from './SearchBar';

interface ButtonProps {
  className?: string;
  placeholder?: string;
  children?: string;
}

export class Button extends React.Component<ButtonProps> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { className } = this.props;
    return (
      <div className="input-wrapper">
        <button className={`button ${className}`}>{this.props.children}</button>
      </div>
    );
  }
}
