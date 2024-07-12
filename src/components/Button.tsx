import React from 'react';

interface ButtonProps {
  className?: string;
  placeholder?: string;
  children?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { className, type, onClick, children } = this.props;
    return (
      <div className="button-wrapper">
        <button className={`button ${className}`} type={type} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
}
