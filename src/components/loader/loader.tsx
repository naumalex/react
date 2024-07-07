import React from 'react';
import './loader.css';

interface LoaderProps {
  loading: boolean;
}

export class Loader extends React.Component<LoaderProps> {
  constructor(props: LoaderProps) {
    super(props);
  }

  render() {
    let className = 'overlay';
    if (!this.props.loading) {
      className += ' hidden';
    }
    return (
      <div className={className}>
        <div className="loader"></div>
      </div>
    );
  }
}
