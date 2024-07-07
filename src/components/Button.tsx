import React from 'react';

interface ButtonProps {
  className?: string;
  placeholder?: string;
  children?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const { className, type } = this.props;
    return (
      <div className="button-wrapper">
        <button className={`button ${className}`} type={type}>
          {this.props.children}
        </button>
      </div>
    );
  }
}
